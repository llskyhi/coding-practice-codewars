-- 題目給的效率不好的SQL
-- 看起來應該是 pctIncrease 故意調整成很花時間？
-- SELECT e.employee_id,
--        e.first_name,
--        e.last_name,
--        d.department_name,
--        e.salary AS old_salary,
--        e.salary * (1 + pctIncrease(e.department_id)) AS new_salary
--   FROM employees   e,
--        departments d
--  WHERE e.department_id = d.department_id
--  ORDER BY 1;

WITH department_salary_percent AS (
    SELECT
        department_id,
        department_name,
        1 + pctIncrease(department_id) AS salary_percent
    FROM departments
)
SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    d.department_name,
    e.salary AS old_salary,
    e.salary * d.salary_percent AS new_salary
FROM employees e
INNER JOIN department_salary_percent d ON e.department_id = d.department_id
ORDER BY 1;

