function primeFactors(n){
    let result = "";
    let power;
    for (let primeCandidate=2; primeCandidate <= n; primeCandidate++){
        for (power = 0; n % primeCandidate == 0; power++)
            n = Math.floor(n / primeCandidate);
        if (power > 0)
            result += `(${primeCandidate}${power > 1 ? `**${power}` : ""})`;
    }
    return result;
}

const assert = require("assert");
assert(primeFactors(7775460) === "(2**2)(3**3)(5)(7)(11**2)(17)")
