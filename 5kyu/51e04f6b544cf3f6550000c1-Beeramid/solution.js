// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    let maxBeerCans = Math.floor(bonus / price)
    let level;
    for (level = 1; level * (level + 1) * (2 * level + 1) <= maxBeerCans * 6; level++);
    return level - 1;
}