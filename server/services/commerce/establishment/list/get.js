
const dbEstablishments = _db.query(`

 SELECT establishment.*,
    commerce.name AS commerce_name,
	commerce.code AS commerce_code
FROM establishment
	INNER JOIN commerce ON establishment.commerce_id = commerce.id
WHERE 1 = 1 
    AND establishment.active = TRUE
    AND commerce.active = TRUE
    `)
    const list = _val.list()

    for (const dbEstablishment of dbEstablishments){
        list.add(
            _val.map()
            .set('uid', dbEstablishment.getString('uid'))
            .set('name', dbEstablishment.getString('name'))
            .set('address', dbEstablishment.getString('address'))
            .set('contact', dbEstablishment.getString('contact'))
            .set('description', dbEstablishment.getString('description'))
            .set('link', dbEstablishment.getString('link'))
            .set('image', dbEstablishment.getFile('image') )
            .set(
                'commerce',
                    _val.map()
                        .set('name', dbEstablishment.getString('commerce_name'))
                        .set('code', dbEstablishment.getString('commerce_code'))
            )
        )
    }



_out.json(list)


