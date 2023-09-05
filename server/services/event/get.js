const uid = _req.getString('uid')

const dbEvent = _db.queryFirst(`
  SELECT
    event.uid,
    event.title,
    event.description,
    event.address,
    event.date_time,
    event.instagram,
    event_category.uid AS "category_uid",
    event_category.name AS "category_name",
    event_category.code AS "category_code",
  FROM
    event
    INNER JOIN event_category 
      ON event.category_id = event_category.id
  WHERE 1 = 1
    AND event.active = TRUE
    AND event_category.active = TRUE
    AND event.uid = ?
`, uid)

if (dbEvent == null) {
    _header.status(404)
    _exec.stop()
}

_out.json(
  _val.map()
    .set("uid", dbEvent.getString("uid"))
    .set("title", dbEvent.getString("title"))
    .set("description", dbEvent.getString("description"))
    .set("address", dbEvent.getString("address"))
    .set("date_time", dbEvent.getString("date_time"))
    .set("instagram", dbEvent.getString("instagram"))
    .set(
        "category",
        _val.map()
            .set("code", dbEvent.getString("category_code"))
            .set("name", dbEvent.getString("category_name"))
    )
)