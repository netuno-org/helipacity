/**
  *
  *  CODE GENERATED AUTOMATICALLY
  *
  *  THIS FILE SHOULD NOT BE EDITED BY HAND
  *
  */

_form.createIfNotExists(
	_val.init()
	.set("big", false)
	.set("control_active", true)
	.set("control_group", false)
	.set("control_user", false)
	.set("description", "")
	.set("displayname", "Estabelecimento")
	.set("export_id", false)
	.set("export_json", true)
	.set("export_lastchange", false)
	.set("export_uid", true)
	.set("export_xls", true)
	.set("export_xml", true)
	.set("firebase", "")
	.set("name", "establishment")
	.set("reorder", 0)
	.set("report", false)
	.set("show_id", true)
	.set("uid", "09122988-1b7c-4959-9653-42d47e47b848")
)
_form.createComponentIfNotExists(
	"09122988-1b7c-4959-9653-42d47e47b848",
	_val.init()
	.set("colspan", 0)
	.set("description", "")
	.set("displayname", "Endere\u00E7o")
	.set("firebase", "")
	.set("group_id", 0)
	.set("height", 0)
	.set("max", 0)
	.set("min", 0)
	.set("name", "address")
	.set("notnull", false)
	.set("primarykey", false)
	.set("properties", "{\"MASK_REVERSE\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK_SELECTONFOCUS\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK\":{\"default\":\"\",\"type\":\"STRING\",\"value\":\"\"}}")
	.set("rowspan", 0)
	.set("tdheight", 0)
	.set("tdwidth", 0)
	.set("type", "text")
	.set("uid", "01379838-1e63-400e-8a23-0feef37ef3a5")
	.set("user_id", 0)
	.set("whenedit", true)
	.set("whenexport", true)
	.set("whenfilter", true)
	.set("whennew", true)
	.set("whenresult", true)
	.set("whenview", true)
	.set("width", 0)
	.set("x", 1)
	.set("y", 5)
)
_form.createComponentIfNotExists(
	"09122988-1b7c-4959-9653-42d47e47b848",
	_val.init()
	.set("colspan", 0)
	.set("description", "")
	.set("displayname", "Com\u00E9rcio")
	.set("firebase", "")
	.set("group_id", 0)
	.set("height", 0)
	.set("max", 0)
	.set("min", 0)
	.set("name", "commerce_id")
	.set("notnull", true)
	.set("primarykey", false)
	.set("properties", "{\"MAX_COLUMN_LENGTH\":{\"default\":\"0\",\"type\":\"INTEGER\",\"value\":\"0\"},\"COLUMN_SEPARATOR\":{\"default\":\" - \",\"type\":\"LINK_SEPARATOR\",\"value\":\" - \"},\"LINK\":{\"default\":\"\",\"type\":\"LINK\",\"value\":\"commerce:name\"},\"SERVICE\":{\"default\":\"com/Select.netuno\",\"type\":\"STRING\",\"value\":\"com/Select.netuno\"},\"ONLY_ACTIVES\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"}}")
	.set("rowspan", 0)
	.set("tdheight", 0)
	.set("tdwidth", 0)
	.set("type", "select")
	.set("uid", "1241e773-6dfc-4cf3-8d34-0d662f315716")
	.set("user_id", 0)
	.set("whenedit", true)
	.set("whenexport", true)
	.set("whenfilter", true)
	.set("whennew", true)
	.set("whenresult", true)
	.set("whenview", true)
	.set("width", 0)
	.set("x", 1)
	.set("y", 1)
)
_form.createComponentIfNotExists(
	"09122988-1b7c-4959-9653-42d47e47b848",
	_val.init()
	.set("colspan", 0)
	.set("description", "")
	.set("displayname", "Contato")
	.set("firebase", "")
	.set("group_id", 0)
	.set("height", 0)
	.set("max", 0)
	.set("min", 0)
	.set("name", "contact")
	.set("notnull", false)
	.set("primarykey", false)
	.set("properties", "{\"MASK_REVERSE\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK_SELECTONFOCUS\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK\":{\"default\":\"\",\"type\":\"STRING\",\"value\":\"\"}}")
	.set("rowspan", 0)
	.set("tdheight", 0)
	.set("tdwidth", 0)
	.set("type", "text")
	.set("uid", "383c7f54-de6f-47a7-8de4-1cdddea3c51a")
	.set("user_id", 0)
	.set("whenedit", true)
	.set("whenexport", true)
	.set("whenfilter", true)
	.set("whennew", true)
	.set("whenresult", true)
	.set("whenview", true)
	.set("width", 0)
	.set("x", 1)
	.set("y", 4)
)
_form.createComponentIfNotExists(
	"09122988-1b7c-4959-9653-42d47e47b848",
	_val.init()
	.set("colspan", 0)
	.set("description", "")
	.set("displayname", "Descri\u00E7\u00E3o")
	.set("firebase", "")
	.set("group_id", 0)
	.set("height", 0)
	.set("max", 0)
	.set("min", 0)
	.set("name", "description")
	.set("notnull", false)
	.set("primarykey", false)
	.set("properties", "{\"MASK_REVERSE\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK_SELECTONFOCUS\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK\":{\"default\":\"\",\"type\":\"STRING\",\"value\":\"\"}}")
	.set("rowspan", 0)
	.set("tdheight", 0)
	.set("tdwidth", 0)
	.set("type", "text")
	.set("uid", "13f50eb7-dab4-47a1-8c19-3c5c504c277e")
	.set("user_id", 0)
	.set("whenedit", true)
	.set("whenexport", true)
	.set("whenfilter", true)
	.set("whennew", true)
	.set("whenresult", true)
	.set("whenview", true)
	.set("width", 0)
	.set("x", 1)
	.set("y", 3)
)
_form.createComponentIfNotExists(
	"09122988-1b7c-4959-9653-42d47e47b848",
	_val.init()
	.set("colspan", 0)
	.set("description", "")
	.set("displayname", "Rede Social")
	.set("firebase", "")
	.set("group_id", 0)
	.set("height", 0)
	.set("max", 0)
	.set("min", 0)
	.set("name", "link")
	.set("notnull", false)
	.set("primarykey", false)
	.set("properties", "{\"MASK_REVERSE\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK_SELECTONFOCUS\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK\":{\"default\":\"\",\"type\":\"STRING\",\"value\":\"\"}}")
	.set("rowspan", 0)
	.set("tdheight", 0)
	.set("tdwidth", 0)
	.set("type", "text")
	.set("uid", "4a9b6661-2544-4c7c-94f9-90801d0c7a04")
	.set("user_id", 0)
	.set("whenedit", true)
	.set("whenexport", true)
	.set("whenfilter", true)
	.set("whennew", true)
	.set("whenresult", true)
	.set("whenview", true)
	.set("width", 0)
	.set("x", 1)
	.set("y", 6)
)
_form.createComponentIfNotExists(
	"09122988-1b7c-4959-9653-42d47e47b848",
	_val.init()
	.set("colspan", 0)
	.set("description", "")
	.set("displayname", "Nome")
	.set("firebase", "")
	.set("group_id", 0)
	.set("height", 0)
	.set("max", 0)
	.set("min", 0)
	.set("name", "name")
	.set("notnull", true)
	.set("primarykey", true)
	.set("properties", "{\"MASK_REVERSE\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK_SELECTONFOCUS\":{\"default\":\"false\",\"type\":\"BOOLEAN\",\"value\":\"false\"},\"MASK\":{\"default\":\"\",\"type\":\"STRING\",\"value\":\"\"}}")
	.set("rowspan", 0)
	.set("tdheight", 0)
	.set("tdwidth", 0)
	.set("type", "text")
	.set("uid", "71bfa4ca-f94d-4376-8e13-be1e839d49ac")
	.set("user_id", 0)
	.set("whenedit", true)
	.set("whenexport", true)
	.set("whenfilter", true)
	.set("whennew", true)
	.set("whenresult", true)
	.set("whenview", true)
	.set("width", 0)
	.set("x", 1)
	.set("y", 2)
)
