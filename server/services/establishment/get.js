const uid = _req.getString('uid')
const dbEstablishment = _db.queryFirst(`
    SELECT
        establishment.uid,
        establishment.name,
        establishment.address,
        establishment.phone,
        establishment.description,
        establishment.link,
        establishment.image,
        establishment_category.name AS "category_name",
        establishment_category.code AS "category_code"
    FROM establishment
        INNER JOIN establishment_category 
            ON establishment.category_id = establishment_category.id
    WHERE 1 = 1 
        AND establishment.active = TRUE
        AND establishment_category.active = TRUE
        AND establishment.uid = ?
`, uid)

if (dbEstablishment == null) {
    _header.status(404)
    _exec.stop()
}

_out.json(
    _val.map()
        .set('uid', dbEstablishment.getString('uid'))
        .set('name', dbEstablishment.getString('name'))
        .set('address', dbEstablishment.getString('address'))
        .set('phone', dbEstablishment.getString('phone'))
        .set('description', dbEstablishment.getString('description'))
        .set('link', dbEstablishment.getString('link'))
        .set('image', dbEstablishment.getFile('image'))
        .set(
            'category',
            _val.map()
                .set('name', dbEstablishment.getString('category_name'))
                .set('code', dbEstablishment.getString('category_code'))
        )
)