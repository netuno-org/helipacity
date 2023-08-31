_out.json(
    _db.query(`
       SELECT uid, code, name
       FROM event_category
    `)
)