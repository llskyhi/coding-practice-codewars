WITH pokemon_modified_strength AS (
    SELECT
        pokemon.pokemon_name,
        (pokemon.str * multipliers.multiplier) AS modifiedStrength,
        multipliers.element AS element
    FROM pokemon
    INNER JOIN multipliers
    on pokemon.element_id = multipliers.id
)
SELECT *
FROM pokemon_modified_strength
WHERE modifiedStrength >= 40
ORDER BY modifiedStrength DESC;
