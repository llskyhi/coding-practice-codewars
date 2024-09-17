function generateHashtag (str) {
    tagString = str.split(/\s+/)
        // map + join
        // .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        // .join("");
        // or reduce
        .reduce(
            (tagString, word) => tagString + word.charAt(0).toUpperCase() + word.substring(1),
            // "",
        );

    return (tagString.length === 0 || tagString.length >= 140) ? false : "#" + tagString;
}


console.log(generateHashtag(""));
// false

console.log(generateHashtag(" ".repeat(200)));
// false

console.log(generateHashtag("Do We have A Hashtag"));
// "#DoWeHaveAHashtag"

console.log(generateHashtag("Codewars"));
// "#Codewars"

console.log(generateHashtag("Codewars Is Nice"));
// "#CodewarsIsNice"

console.log(generateHashtag("Codewars is nice"));
// "#CodewarsIsNice"

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
// "#CodeWars"

console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
// false

console.log(generateHashtag("a".repeat(139)));
// "#A" + "a".repeat(138)

console.log(generateHashtag("a".repeat(140)));
// false
