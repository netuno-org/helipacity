const categoryCode = _req.getString(`categoryCode`)

const page = _req.getInt(`page`, 1)
let offset = (page - 1) * 6
if (offset < 0) {
    offset = 0
}

let filterWhere = ""
const filterParams = _val.list()
if (categoryCode != "" && categoryCode != "all") {
    filterWhere = "AND event_category.code = $1"
    filterParams.add(categoryCode)
    _log.info("Params", filterParams)
}

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
    event_category.code AS "category_code",
  FROM
    event
    INNER JOIN event_category 
      ON event.category_id = event_category.id
  WHERE 1 = 1
    AND event.active = TRUE
    AND event_category.active = TRUE
    AND event.date_time >= CAST( CONCAT(CURRENT_DATE,' 08:00:00.0') AS TIMESTAMP)
    ${filterWhere}
  ORDER BY 
  LIMIT 6
  OFFSET ${offset}
`, filterParams)

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
                    .set("code", dbEvent.getString("category_code"))
                    .set("name", dbEvent.getString("category_name"))
            )
    )
}

_out.json(events)