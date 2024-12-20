/*  SQL  */
SELECT
    top_half.id,
    top_half.heads,
    top_half.arms,
    bottom_half.legs,
    bottom_half.tails,
    CASE
        WHEN top_half.heads > top_half.arms OR bottom_half.tails > bottom_half.legs THEN 'BEAST'
        ELSE 'WEIRDO'
    END AS species
FROM
top_half
INNER JOIN bottom_half
ON top_half.id = bottom_half.id
ORDER BY species;
