_db.execute(
    "UPDATE establishment SET sorter = RANDOM() * 1000 * (SELECT COUNT(1) FROM establishment);"
)

_log.info("executou o job 'establishment-sorter'!")