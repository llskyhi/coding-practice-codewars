-- table "payment"
-- Column       | Type                        | Modifiers
-- -------------+-----------------------------+----------
-- payment_id   | integer                     | not null
-- customer_id  | smallint                    | not null
-- staff_id     | smallint                    | not null
-- rental_id    | integer                     | not null
-- amount       | numeric(5,2)                | not null
-- payment_date | timestamp without time zone | not null

-- Expected output format
-- month | total_count | total_amount | mike_count | mike_amount | jon_count | jon_amount
-- ------+-------------+--------------+------------+-------------+-----------+-----------
-- 2     |             |              |            |             |           |
-- 5     |             |              |            |             |           |
-- ...
-- month - number of the month (1 - January, 2 - February, etc.)
-- total_count - total number of payments
-- total_amount - total payment amount
-- mike_count - total number of payments accepted by Mike (staff_id = 1)
-- mike_amount - total amount of payments accepted by Mike (staff_id = 1)
-- jon_count - total number of payments accepted by Jon (staff_id = 2)
-- jon_amount - total amount of payments accepted by Jon (staff_id = 2)
-- month | total_count | total_amount | mike_count | mike_amount | jon_count | jon_amount


SELECT
    DATE_PART('month', payment_date) AS month,
    -- EXTRACT(MONTH FROM payment_date) AS month
    -- https://stackoverflow.com/questions/16517298/conditional-sum-in-group-by-query-mssql
    COUNT(*) AS total_count,
    SUM(amount) AS total_amount,
    SUM(CASE WHEN staff_id=1 THEN 1      ELSE 0 END) AS mike_count,
    SUM(CASE WHEN staff_id=1 THEN amount ELSE 0 END) AS mike_amount,
    SUM(CASE WHEN staff_id=2 THEN 1      ELSE 0 END) AS jon_count,
    SUM(CASE WHEN staff_id=2 THEN amount ELSE 0 END) AS jon_amount
    -- or use FILTER
FROM payment
GROUP BY month
ORDER BY month;
