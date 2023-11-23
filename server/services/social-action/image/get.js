const dbSocialAction = _db.get('social_action', _req.getString('uid'))
if (dbSocialAction) {
  const dbSocialActionImageName = dbSocialAction.getString('image')
  const storageSocialActionImageFile = _storage.database(
    'social_action',
    'image',
    dbSocialActionImageName
  )
  switch (storageSocialActionImageFile.extension()){
    case 'jpg':
        _header.contentTypeJPG()
        break;
    case 'jpeg':
        _header.contentTypeJPG()
        break;    
    case 'png':
        _header.contentTypePNG()
        break;
    default:
        _error.fatal(`Invalid image extension ${storageSocialActionImageFile.extension()}`)
        break;
  }
  _header.noCache()
  _out.copy(storageSocialActionImageFile.inputStream())
} else {
  _header.status(404)
  _out.json(
    _val.map()
      .set("error", "product-image-not-found")
  )
}
