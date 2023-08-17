const categoryCode = _req.getString(`categoryCode`)
const page = _req.getInt(`page`, 1)
let offset = (page - 1) * 6
if (offset < 0) {
    offset = 0
}

let filterWhere = ""
const filterParams = _val.list()
if (categoryCode != "" && categoryCode != "all") {
    filterWhere = "AND establishment_category.code = $1"
    filterParams.add(categoryCode)
}

const dbEstablishments = _db.query(`
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
        ${filterWhere}
    ORDER BY RANDOM()
    LIMIT 6
    OFFSET ${offset}
`, filterParams)

const list = _val.list()

for (const dbEstablishment of dbEstablishments) {
    list.add(
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
}

_out.json(list)