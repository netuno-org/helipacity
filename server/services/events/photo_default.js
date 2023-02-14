const dbCategory = _db.get('categoria', _req.getString('uid'))
if (dbCategory) {
  const dbCategoryImageName = dbProduct.getString('foto')
  const storageCategoryImageFile = _storage.database(
    'categoria',
    'foto',
    dbCategoryImageName
  )
  switch (storageCategoryImageFile.extension()) {
    case 'jpg':
      _header.contentTypeJPG()
      break;
    case 'png':
      _header.contentTypePNG()
      break;
    default:
      _error.fatal(`Invalid image extension: ${storageCategoryImageFile.extension()}`)
      break;
  }
  _header.noCache()
  _out.copy(storageCategoryImageFile.inputStream())
} else {
  _header.status(404)
  _out.json(
    _val.map()
      .set("error", "product-image-not-found")
  )
}