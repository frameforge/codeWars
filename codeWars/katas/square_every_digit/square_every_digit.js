// Square Every Digit


function squareDigits(num) {
    const numString = num.toString();
    let result = "";

    for (let i = 0; i < numString.length; i++) {
        result += numString[i] ** 2;
    }

    return parseInt(result);
}


console.log(squareDigits(9119)); // Output: 811181
console.log(squareDigits(765)); // Output: 493625
