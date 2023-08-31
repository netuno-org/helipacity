const dbEvent = _db.get('event', _req.getString('uid'))
if (dbEvent) {
    const dbEventImageName = dbEvent.getString('image')
    const storageEventImageFile = _storage.database(
        'event',
        'image',
        dbEventImageName
    )
    switch (storageEventImageFile.extension()) {
        case 'jpg':
            _header.contentTypeJPG()
            break;
        case 'png':
            _header.contentTypePNG()
            break;
        default:
            _error.fatal(`Invalid image extension: ${storageEventImageFile.extension()}`)
            break;
    }
    _header.noCache()
    _out.copy(storageEventImageFile.inputStream())
} else {
    _header.status(404)
    _out.json(
        _val.map()
            .set("error", "product-image-not-found")
    )
}