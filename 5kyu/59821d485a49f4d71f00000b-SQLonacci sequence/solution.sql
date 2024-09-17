WITH RECURSIVE cte AS (
    SELECT
        0::BIGINT AS number1,
        1::BIGINT AS number2,
        0 AS serial_number

    UNION

    SELECT
        number2 AS number1,
        number1 + number2 AS number2,
        serial_number + 1 AS serial_number
    FROM cte
    WHERE serial_number + 1 < 90
)
SELECT
    number1 AS number
FROM cte
;

-- 參考別人的寫法
WITH RECURSIVE cte(number1, number2) AS (
    -- SELECT
    --     0::BIGINT AS number1,
    --     1::BIGINT AS number2
    VALUES(
        0::BIGINT,
        1::BIGINT
    )

    UNION

    SELECT
        number2,
        number1 + number2
    FROM cte
)
SELECT
    number1 AS number
FROM cte
LIMIT 90 -- 這樣不會出問題...?
;