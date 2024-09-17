WITH
result_count AS (
    SELECT COUNT(score)
    FROM result
),
median1 AS (
    SELECT score
    FROM result
    ORDER BY score ASC
    LIMIT 1
    OFFSET ((SELECT * FROM result_count) - 1) / 2
),
median2 AS (
    SELECT score
    FROM result
    ORDER BY score DESC
    LIMIT 1
    OFFSET ((SELECT * FROM result_count) - 1) / 2
)
SELECT
    MIN(score) AS min,
    MAX(score) AS max,
    ((SELECT * FROM median1) + (SELECT * FROM median2))::float / 2 AS median
FROM result
;