String.prototype.toJadenCase = function () {
    // https://stackoverflow.com/a/196991
    return this.replace(
        /\w\S*/g, // start from a letter, followed by non-space characters
        text => text.charAt(0).toUpperCase() + text.substring(1),
    );
};

let test_string = "How can mirrors be real if our eyes aren't real";
console.log(`"${test_string.toJadenCase()}"`);
// "How Can Mirrors Be Real If Our Eyes Aren't Real"
