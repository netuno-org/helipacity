_out.json(
    _db.query(`
       SELECT uid, code, name
       FROM social_action_category
    `)
)