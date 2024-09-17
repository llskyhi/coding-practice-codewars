-- 1. 找出哪些學生上的（不重複的）課最多（有可能重複嗎...？）
-- 2. 合併字串，把各個學生上的課以指定格式串起來：
--     課名1 (日期 - 分數), 課名2 (日期 - 分數), ...
--     其中課名以課程日期(升序)、課名(字碼升序)排序
-- 3. 完成要求的其他部分（欄位...），
--     最後結果以以下順序排序：
--     1. 課程數，降序
--     2. 最高分，降序
--     3. student.id，升序
WITH
courses_considered AS (
    SELECT *
    FROM courses
    WHERE course_date BETWEEN '2022-10-1' AND '2022-12-31'
)
SELECT
    s.id AS student_id,
    s.name,
    COUNT(c.course_name) AS num_courses,
    CONCAT(
        (
            SELECT
                course_name
            FROM courses_considered temp
            WHERE temp.student_id = s.id
            ORDER BY
                temp.score DESC,
                temp.course_date DESC,
                temp.course_name ASC
            LIMIT 1
        ),
        ' (', MAX(c.score), ')'
    ) AS highest_scored_course,
    STRING_AGG(
        CONCAT(c.course_name, ' (', c.course_date, ' - ', c.score, ')'),
        ', '
        ORDER BY
            course_date ASC,
            course_name ASC
    ) AS course_list
FROM
    courses_considered c,
    students s
WHERE c.student_id = s.id
GROUP BY s.id, s.name
ORDER BY
    num_courses DESC,
    MAX(c.score) DESC,
    student_id ASC
LIMIT 20
;
