select
    year,
    CASE
        WHEN year % 400 = 0 THEN true
        WHEN year % 100 = 0 THEN false
        WHEN year % 4 = 0 THEN true
        ELSE false
    END
    -- or ..
    -- (year % 400 = 0) OR (year % 4 = 0 AND year % 100 <> 0)
    as is_leap
from years
order by year;      -- result has to be sorted by year, ascending
