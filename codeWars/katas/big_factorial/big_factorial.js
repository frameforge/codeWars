// 5! is 5 * 4 * 3 * 2 * 1 = 120

const bigFactorial = (number) => {
    if (isNaN(number)) {
        return NaN
    }
    if (number <= 0) {
        return 1
    }
    let count = 1;
    for (let i = 1; i <= number; i++) {
        count = count * i
    }
    return count
}

const factorial = bigFactorial(4)
console.log(factorial)
