WITH
    potential_customers AS (
        SELECT
            customerid,
            SUM(price) AS total_bought
        FROM sales
        GROUP BY customerid
        HAVING SUM(price) >= 199
    ),
    customers_without_addresses AS (
        SELECT
            c.customerid
        FROM customers c
        LEFT JOIN addresses a ON c.customerid = a.customerid
        GROUP BY c.customerid
        HAVING COUNT(a.addressid) = 0
    ),
    customers_with_bad_addresses AS (
        SELECT
            s.customerid
        FROM sales s
        INNER JOIN addresses a ON s.addressid = a.addressid
        WHERE
            s.customerid <> a.customerid
        GROUP BY s.customerid
    ),
    target_customers AS (
        SELECT
            p.customerid,
            'You''ve spent enough money with us so we care about your business. You don''t have an address on file yet you''ve selected an address. Please login to our site and add an address so we may use it... Don''t ask any questions on how this happened.' AS script
        FROM potential_customers p
        INNER JOIN customers_without_addresses w ON p.customerid = w.customerid

        UNION

        SELECT
            p.customerid,
            'You''ve spent enough money with us so we care about your business. Unfortunately you have selected a bad address. Please login to our site and select a good address.' AS script
        FROM potential_customers p
        INNER JOIN customers_with_bad_addresses b ON (p.customerid = b.customerid AND p.customerid NOT IN (SELECT customerid FROM customers_without_addresses))
    ),
    serialized_target_customers AS (
        SELECT
            t.customerid,
            c.email,
            p.total_bought,
            t.script,
            ROW_NUMBER() OVER (ORDER BY p.total_bought DESC, c.email ASC) AS serial_number
        FROM target_customers t
        INNER JOIN customers c ON t.customerid = c.customerid
        INNER JOIN potential_customers p ON t.customerid = p.customerid
    ),
    serialized_sales_representatives AS (
        SELECT
            CONCAT(firstname, (CASE WHEN lastname = '' OR lastname IS NULL THEN NULL ELSE CONCAT(' ', lastname) END)) AS full_name,
            ROW_NUMBER() OVER (ORDER BY hiredate ASC) AS serial_number
        FROM salesreps
    )
SELECT
    c.email,
    t.total_bought,
    s.full_name AS rep_name,
    t.script
FROM serialized_target_customers t
INNER JOIN customers c ON t.customerid = c.customerid
INNER JOIN serialized_sales_representatives s ON (t.serial_number - 1) % (SELECT COUNT(*) FROM serialized_sales_representatives) + 1 = s.serial_number
ORDER BY t.serial_number ASC
;
