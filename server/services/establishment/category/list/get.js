_out.json(
    _db.query(`
       SELECT uid, code, name
       FROM establishment_category
    `)
)