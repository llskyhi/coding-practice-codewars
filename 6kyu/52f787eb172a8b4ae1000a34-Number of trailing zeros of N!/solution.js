function zeros (n) {
    let zeroCount = 0;

    for (let powerOfFive = 5; powerOfFive <= n; powerOfFive *= 5) {
        zeroCount += Math.floor(n / powerOfFive);
    }
    // or just ..
    // while (n > 0) {
    //     n = Math.floor(n / 5)
    //     zeroCount += n;
    // }

    return zeroCount;
}

console.log(zeros(0));
// 0
console.log(zeros(5));
// 1
console.log(zeros(6));
// 1
console.log(zeros(30));
// 7
