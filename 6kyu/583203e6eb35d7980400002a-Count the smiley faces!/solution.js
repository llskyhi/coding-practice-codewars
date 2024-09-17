//return the total number of smiling faces in the array
function countSmileys(arr) {
    const regex = /^[:;][-~]?[D)]$/;
    return arr.filter(face => regex.test(face)).length;
}

console.log(countSmileys([]                             ));
// 0

console.log(countSmileys([':D',':~)',';~D',':)']        ));
// 4

console.log(countSmileys([':)',':(',':D',':O',':;']     ));
// 2

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
// 1

