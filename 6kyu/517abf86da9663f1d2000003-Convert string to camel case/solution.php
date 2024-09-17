<?php
// https://www.codewars.com/kata/517abf86da9663f1d2000003
function toCamelCase(string $str): string {
    $words = preg_split("[-_]", $str);
    // NOTE: seems this kata's author thinks "camel case" doesn't require other letter being lower case.
    // convert letters other than first letter in a word to lower case
    // $words = array_map(function(string $word) {
    //     return $word[0].strtolower(substr($word, 1));
    // }, $words);
    return $words[0].implode(array_map("ucfirst", array_slice($words, 1)));
}

foreach ([
    "test-string",
    "tEst-string",
    "TEst_string",
    "tEst",
    "A-B-C",
    "",
] as $s) {
    $result = toCamelCase($s);
    print("\"{$result}\"\n");
}
?>