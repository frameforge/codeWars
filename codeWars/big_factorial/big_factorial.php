<?php
// 5! is 5 * 4 * 3 * 2 * 1 = 120

function big_factorial($n)
{
    if (gettype($n) !== 'integer' || $n === 0) {
        return 1;
    } else if ($n < 0) {
        return 'None';
    } else {
        $i = 1;
        $makeFact = 1;
        while ($i <= $n) {
            $makeFact = $makeFact * $i;
            $i++;
        }
        return $makeFact;
    }
}


$factorial = big_factorial(5);
echo $factorial;
