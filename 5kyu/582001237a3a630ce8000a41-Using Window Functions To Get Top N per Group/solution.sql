WITH full_rank AS (
    SELECT
        id as post_id,
        category_id,
        title,
        views,
        ROW_NUMBER() OVER (
            PARTITION BY category_id
            ORDER BY
                views DESC,
                id ASC
        ) AS rank
    FROM posts
)
SELECT
    c.id AS category_id,
    c.category,
    r.title,
    r.views,
    r.post_id
FROM
    categories c
LEFT JOIN full_rank r ON c.id = r.category_id
WHERE
    r.rank <= 2
    OR r.rank IS NULL
ORDER BY
    c.category ASC,
    -- c.id ASC, -- seems there's an issue that 2 different category ID may have same category name
    r.rank ASC
;
