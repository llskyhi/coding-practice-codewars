-- 這題目有點糟糕...
-- 敘述不清楚，表的結構又怪怪的：
-- 1. members裡的number不知道是什麼意思
-- 2. member只屬於一個department，但 members 和 departments 卻是不相關的兩張表

CREATE VIEW members_approved_for_voucher AS
    SELECT
        members.id AS id,
        members.name AS name,
        members.email AS email,
        SUM(products.price) AS total_spending
    FROM sales
    INNER JOIN products ON sales.product_id = products.id
    INNER JOIN members ON sales.member_id = members.id
    WHERE
        sales.department_id IN (
            SELECT
                sales.department_id
            FROM sales
            INNER JOIN products ON sales.product_id = products.id
            GROUP BY sales.department_id
            HAVING SUM(products.price) > 10000
        )
    GROUP BY members.id
    HAVING SUM(products.price) > 1000
;

SELECT *
FROM members_approved_for_voucher
ORDER BY id
;
