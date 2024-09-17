// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    return Array.from(s)
        .map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index))
        .join("-");

    let letter;
    // or: Array.from(Array(s.length).keys())
    return [...Array(s.length).keys()]
        .map((index) => (letter = s.charAt(index)).toUpperCase() + letter.toLowerCase().repeat(index))
        .join("-");
}


console.log(accum("ZpglnRxqenU"));
// "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

console.log(accum("NyffsGeyylB"));
// "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"

console.log(accum("MjtkuBovqrU"));
// "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"

console.log(accum("EvidjUnokmM"));
// "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"

console.log(accum("HbideVbxncC"));
// "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
