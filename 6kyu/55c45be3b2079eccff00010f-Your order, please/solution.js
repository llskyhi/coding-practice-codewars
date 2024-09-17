function order(words){
    if (words === "")
        return ""

    const regex = /\w*(\d)\w*/;
    return words.split(" ")
        // to array of object in form of {order: N, word: wordN}
        .map((word) => {
            const match = regex.exec(word);
            return {
                order: parseInt(match[1]),
                word: match[0],
            };
        })
        // sort the object array by number
        .sort((word1, word2) => word1.order - word2.order)
        // map to array of words again
        .map((word) => word.word)
        // join words
        .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"))
// "Thi1s is2 3a T4est"

console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
// "Fo1r the2 g3ood 4of th5e pe6ople"

console.log(order(""))
// ""
