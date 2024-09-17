WITH RECURSIVE employee_levels AS (
    SELECT
        1 AS level,
        id,
        manager_id
    FROM employees
    WHERE
        manager_id IS NULL

    UNION

    SELECT
        employee_levels.level + 1 as level,
        employees.id,
        employees.manager_id
    FROM employees
    INNER JOIN employee_levels ON employees.manager_id = employee_levels.id
)
SELECT
    employee_levels.*,
    employees.first_name,
    employees.last_name
FROM employee_levels
INNER JOIN employees ON employee_levels.id = employees.id
ORDER BY level
;
