-- 這個 kata 好像只有 PostgreSQL 9.6，不支援 regexp_* ?
-- 然後用 LIKE 都會 timeout ...
-- 就放棄了 :(

-- SELECT
--     *
-- FROM
--     customers c,
--     prospects p
-- WHERE
--     regexp_like(
--         p.full_name,
--         CONCAT(
--             '[[:<:]]',
--             c.first_name,
--             ',? ',
--             c.last_name,
--             '[[:>:]]'
--         )
--     )