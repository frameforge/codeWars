// Binary Divisible By ?


function binaryDivisibleBy(str, divisible = 3) {
    // regex for only 0 and 1 number
    const regex = /^[0-1]+$/

    // check str is 0 and 1 only
    const isZeroOne = str.match(regex);

    if (isZeroOne) {
        // converting into number
        const convertToNum = parseInt(isZeroOne, 2);

        // return true if number is divisible by 3
        if (convertToNum % divisible === 0) return true;
        else return false;
    } else {
        return false;
    }
}

const textCase1 = binaryDivisibleBy("000")
console.log(textCase1)

const textCase2 = binaryDivisibleBy("011")
console.log(textCase2)

const textCase3 = binaryDivisibleBy("001")
console.log(textCase3)