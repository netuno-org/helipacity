
class CluarCustom {
    static build(settings, data) {
        if (settings.images === true) {
            CluarCustom.publishListImages("event")
            CluarCustom.publishListImages("establishment")
        }
    }

    static publishListImages(listType) {
        const dbEvents = _db.query(`SELECT * FROM ${listType}`)   
        const folder = _app.folder(`${Cluar.base()}/images/${listType}`)
        if (!folder.exists()) {
            folder.mkdir()
        }
        for (const dbEvent of dbEvents) {
            const fileNameFull = dbEvent.getString("image")
            const dbImageFile = _storage.database(listType, "image", fileNameFull)
                .file()
            const fileName = fileNameFull.substring(0, fileNameFull.lastIndexOf("."))
            const image = _image.init(dbImageFile)
            const aspectRatio = 300
            image.resize(
                aspectRatio,
                Math.round(image.height() * aspectRatio / image.width())
            ).save(_app.file(`${folder.path()}/${fileName}.jpg`), "jpeg")
        }
    }
}
