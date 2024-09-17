CREATE EXTENSION tablefunc;
-- Create your CROSSTAB statement here
SELECT *
FROM CROSSTAB(
    $CROSSTAB_TEXT$
    SELECT
        p.name,
        d.detail,
        COUNT(d.detail)
    FROM
        products p,
        details d
    WHERE p.id = d.product_id
    GROUP BY p.name, d.detail
    ORDER BY
        p.name ASC,
        CASE
            WHEN d.detail = 'good' THEN 1
            WHEN d.detail = 'ok'   THEN 2
            WHEN d.detail = 'bad'  THEN 3
            -- ELSE 4
        END ASC
    $CROSSTAB_TEXT$
) AS test(
    "name" text,
    -- order matters, depends on how values are ordered in CROSSTAB query
    "good" bigint,
    "ok"   bigint,
    "bad"  bigint
)
;

-- 對比：不使用 CROSSTAB
SELECT
    p.name,
    d.detail,
    COUNT(d.detail)
FROM
    products p,
    details d
WHERE p.id = d.product_id
GROUP BY p.name, d.detail
ORDER BY
    p.name ASC,
    CASE
        WHEN d.detail = 'good' THEN 1
        WHEN d.detail = 'ok'   THEN 2
        WHEN d.detail = 'bad'  THEN 3
        -- ELSE 4
    END ASC
;
