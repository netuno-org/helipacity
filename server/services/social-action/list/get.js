const categoryCode = _req.getString(`categoryCode`)
const page = _req.getInt(`page`, 1)
let offset = (page - 1) * 6
if (offset < 0) {
    offset = 0
}

let filterWhere = ""
const filterParams = _val.list()
if (categoryCode != "" && categoryCode != "all") {
    filterWhere = "AND social_action_category.code = $1"
    filterParams.add(categoryCode)
}

const dbSocialActions = _db.query(`
    SELECT
        social_action.uid,
        social_action.name,
        social_action.date_time,
        social_action.address,
        social_action.phone,
        social_action.description,
        social_action.link,
        social_action.image,
        social_action_category.name AS "category_name",
        social_action_category.code AS "category_code"
    FROM social_action
        INNER JOIN social_action_category 
            ON social_action.category_id = social_action_category.id
    WHERE 1 = 1 
        AND social_action.active = TRUE
        AND social_action_category.active = TRUE
        ${filterWhere}
    ORDER BY social_action.date_time, social_action.id
    LIMIT 6
    OFFSET ${offset}
`, filterParams)

const list = _val.list()

for (const dbSocialAction of dbSocialActions) {
    list.add(
        _val.map()
            .set('uid', dbSocialAction.getString('uid'))
            .set('name', dbSocialAction.getString('name'))
            .set('date_time', dbSocialAction.getString('date_time'))
            .set('address', dbSocialAction.getString('address'))
            .set('phone', dbSocialAction.getString('phone'))
            .set('description', dbSocialAction.getString('description'))
            .set('link', dbSocialAction.getString('link'))
            .set('image', dbSocialAction.getString('image'))
            .set(
                'category',
                _val.map()
                    .set('name', dbSocialAction.getString('category_name'))
                    .set('code', dbSocialAction.getString('category_code'))
            )
    )
}

_out.json(list)