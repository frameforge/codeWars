// Gap in Primes

function gap(g, m, n) {
    function isPrime(num) {
        if (num < 2) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    let prevPrime = 0;

    for (let num = m; num <= n; num++) {
        if (isPrime(num)) {
            if (num - prevPrime === g) {
                return [prevPrime, num];
            }

            prevPrime = num;
        }
    }

    return null;
}

const test1 = gap(2, 100, 110) // [101, 103]
const test2 = gap(4, 100, 110) // [103, 107]
const test3 = gap(6, 100, 110) // null
const test4 = gap(8, 300, 400) // [359, 367]
const test5 = gap(10, 300, 400) // [337, 347]

console.log(test1)
console.log(test3)
console.log(test5)