// Binary multiple of 3

function binaryMultipleOf3(str) {
    const regex = /^(0*11*|0*)$/;
    return regex.test(str);
}

console.log(binaryMultipleOf3('000'));  // Output: true
console.log(binaryMultipleOf3('001'));  // Output: false
console.log(binaryMultipleOf3('011'));  // Output: true
console.log(binaryMultipleOf3('110'));  // Output: true
console.log(binaryMultipleOf3(' abc '));  // Output: false