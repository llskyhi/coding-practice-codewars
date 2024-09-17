function isPangram(string){
    let letterSet = new Set();
    for (const letter of string.toLowerCase()) {
        if (letter.match(/[a-z]/)) {
            letterSet.add(letter);
            if (letterSet.size === 26)
                return true
        }
    }
    return false;
    // or
    // return new Set(string.toLowerCase().matchAll(/[a-z]/g)).size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// true

console.log(isPangram("This is not a pangram."));
// false
