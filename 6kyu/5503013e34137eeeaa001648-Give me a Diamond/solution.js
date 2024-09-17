// https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){
    if (n < 0 || n % 2 === 0)
        return null;

    let lines = [];
    for (let stars = 1; stars <= n; stars += 2) {
        lines.push(" ".repeat(Math.floor((n - stars) / 2)) + "*".repeat(stars) + "\n");
    }
    return lines.slice(0, -1).reduceRight((result, line) => result + line, lines.join(""));
}

console.log(diamond(1))

console.log(diamond(3))

console.log(diamond(5))
