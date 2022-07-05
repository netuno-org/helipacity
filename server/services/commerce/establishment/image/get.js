const dbEstablishment = _db.get('establishment', _req.getString('uid'))
if (dbEstablishment) {
  const dbEstablishmentImageName = dbEstablishment.getString('image')
  const storageEstablishmentImageFile = _storage.database(
    'establishment',
    'image',
    dbEstablishmentImageName
  )
  switch (storageEstablishmentImageFile.extension()){
    case 'jpg':
        _header.contentTypeJPG()
        break;
    case 'png':
        _header.contentTypePNG()
        break;
        default:
            _error.fatal(`Invalid image extension ${storageEstablishmentImageFile.extension()}`)
        break;
  }
  _header.noCache()
  _out.copy(storageEstablishmentImageFile.inputStream())
} else {
  _header.status(404)
  _out.json(
    _val.map()
      .set("error", "product-image-not-found")
  )
}
