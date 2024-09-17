<?php
// https://www.codewars.com/kata/57f609022f4d534f05000024
function stray($arr) {
    $traveler = 0;
    foreach ($arr as $number) {
        $traveler ^= $number;
    }
    return $traveler;
}
?>