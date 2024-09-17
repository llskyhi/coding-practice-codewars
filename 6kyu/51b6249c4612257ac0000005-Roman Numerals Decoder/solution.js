function solution (roman) {
    //    1: I
    //    5: V
    //   10: X
    //   50: L
    //  100: C
    //  500: D
    // 1000: M

    //  1   I
    //  2   II
    //  3   III
    //  4   IV
    //  5   V
    //  6   VI
    //  7   VII
    //  8   VIII
    //  9   IX

    // thousands    (M*)?
    // hundreds     (C[MD]|D?C{0,3})?
    // tens         (X[CL]|L?X{0,3})?
    // digits       (I[XV]|V?I{0,3})?
    const romanRegex = /^(?<thousands>M*)?(?<hundreds>C[MD]|D?C{0,3})?(?<tens>X[CL]|L?X{0,3})?(?<digits>I[XV]|V?I{0,3})?$/;
    let number = 0;
    const match = romanRegex.exec(roman);
    function getDigit(romanString, oneSymbol, fiveSymbol, tenSymbol) {
        switch (romanString) {
        case "":
            return 0;
        case oneSymbol + fiveSymbol:
            return 4;
        case oneSymbol + tenSymbol:
            return 9;
        default:
            return romanString.length + (romanString.charAt(0) === fiveSymbol ? (5 - 1) : 0);
        }
    }
    if (match.groups["thousands"]) {
        number += 1000 * match.groups["thousands"].length;
    }
    if (match.groups["hundreds"]) {
        number += 100 * getDigit(match.groups["hundreds"],                     "C", "D", "M");
    }
    if (match.groups["tens"]) {
        number +=  10 * getDigit(match.groups["tens"],               "X", "L", "C");
    }
    if (match.groups["digits"]) {
        number +=       getDigit(match.groups["digits"],   "I", "V", "X");
    }
    return number;
}


console.log(solution('XXI'));
// 21

console.log(solution('I'));
// 1

console.log(solution('IV'));
// 4

console.log(solution('VI'));
// 6

console.log(solution('MMVIII'));
// 2008

console.log(solution('MDCLXVI'));
// 1666

console.log(solution('CMLIV'));
// 954
