<?php
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047
function findNb(int $m) {
    if ($m < 0) return -1;
    // Find positive integer root of (n(n+1)/2)^2 = m
    // -> find positive root of n^2 + n - (sqrt($m) * 2) = 0
    $a = 1;
    $b = 1;
    $c = (sqrt($m) * 2);
    $discriminant = sqrt(1 + 4 * 1 * $c);
    $n = (int) round((-$b + $discriminant)/(2 * $a));
    return pow($n * ($n + 1) / 2, 2) == $m ? $n : -1;
}

foreach ([
    4183059834009 => 2022,
    24723578342962 => -1,
    135440716410000 => 4824,
] as $m=>$solution){
    $result = findNb($m) == $solution;
    print("result: {$result}.\n");
}
?>