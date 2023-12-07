
class CluarCustom {
    static build(settings, data) {
        if (settings.images === true) {
            CluarCustom.publishListImages("event")
            CluarCustom.publishListImages("establishment")
            CluarCustom.publishListImages("social_action")
        }
    }

    static publishListImages(listType) {
        const dbResults = _db.query(`SELECT * FROM ${listType}`)   
        const folder = _app.folder(`${Cluar.base()}/images/${listType.replace('_', '-')}`)
        if (!folder.exists()) {
            folder.mkdir()
        }
        for (const dbResult of dbResults) {
            const fileNameFull = dbResult.getString("image")
            if (fileNameFull == '') {
                continue;
            }
            const dbImageFile = _storage.database(listType, "image", fileNameFull)
                .file()
            if (!dbImageFile.exists()) {
                continue;
            }
            const fileName = fileNameFull.substring(0, fileNameFull.lastIndexOf("."))
            const image = _image.init(dbImageFile)
            const aspectRatio = 300
            image.resize(
                aspectRatio,
                Math.round(image.height() * aspectRatio / image.width())
            ).save(_app.file(`${folder.path()}/${fileName}.${dbImageFile.extension()}`), "jpeg")
        }
    }

    static siteMap(origin, document, tagURLSet) {
        const dbList = _db.query(`
            SELECT uid, 'evento' AS type FROM event WHERE active = true
            UNION ALL
            SELECT uid, 'comercio' AS type FROM establishment WHERE active = true
            UNION ALL
            SELECT uid, 'acao-social' AS type FROM social_action WHERE active = true
        `)
        for (const dbItem of dbList) {
            const tagURL = document.createElement("url")
            const tagLoc = document.createElement("loc")
            tagLoc.appendChild(document.createTextNode(
                `${origin}/pt/${dbItem.getString("type")}/${dbItem.getString("uid")}`
            ))
            tagURL.appendChild(tagLoc)
            const tagChangeFreq = document.createElement("changefreq")
            tagChangeFreq.appendChild(document.createTextNode("daily"))
            tagURL.appendChild(tagChangeFreq)
            const tagPriority = document.createElement("priority")
            tagPriority.appendChild(document.createTextNode("0.5"))
            tagURL.appendChild(tagPriority)
            tagURLSet.appendChild(tagURL)
        }
    }
}
