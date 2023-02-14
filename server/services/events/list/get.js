const dbEvents = _db.query(`
    SELECT
        event.uid,
        event.title,
        event.description,
        event.date_time,
        event.instagram,
        event.image,
        event_category.uid AS "category_uid",
        event_category.name AS "category_name",
    FROM
        event
    INNER JOIN event_category ON event.category_id = event_category.id
`)

const events = _val.list()

for (const dbEvent of dbEvents) {
    events.add(
        _val.map()
            .set("uid", dbEvent.getString("uid"))
            .set("title", dbEvent.getString("title"))
            .set("description", dbEvent.getString("description"))
            .set("date_time", dbEvent.getString("date_time"))
            .set("image", dbEvent.getString("image"))
            .set("instagram", dbEvent.getString("instagram"))
            .set(
                "category",
                _val.map()
                    .set("uid", dbEvent.getString("category_uid"))
                    .set("name", dbEvent.getString("category_name"))
            )
    )
}

_out.json(events)
