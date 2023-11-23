const uid = _req.getString('uid')
const dbSocialAction = _db.queryFirst(`
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
        AND social_action.uid = ?
`, uid)

if (dbSocialAction == null) {
    _header.status(404)
    _exec.stop()
}

_out.json(
    _val.map()
        .set('uid', dbSocialAction.getString('uid'))
        .set('name', dbSocialAction.getString('name'))
        .set('date_time', dbSocialAction.getString('date_time'))
        .set('address', dbSocialAction.getString('address'))
        .set('phone', dbSocialAction.getString('phone'))
        .set('description', dbSocialAction.getString('description'))
        .set('link', dbSocialAction.getString('link'))
        .set('image', dbSocialAction.getFile('image'))
        .set(
            'category',
            _val.map()
                .set('name', dbSocialAction.getString('category_name'))
                .set('code', dbSocialAction.getString('category_code'))
        )
)