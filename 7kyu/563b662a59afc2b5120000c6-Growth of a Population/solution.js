// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    const growthRate = 1 + (percent === null ? 0 : percent / 100);
    let years = 0;
    let populationNow = p0;
    while (populationNow < p){
        populationNow = Math.floor((populationNow * growthRate) + aug);
        years++;
    }
    return years;
}

console.log(nbYear(1500, 5, 100, 5000));
// 15

console.log(nbYear(1500000, 2.5, 10000, 2000000));
// 10

console.log(nbYear(1500000, 0.25, 1000, 2000000));
// 94

