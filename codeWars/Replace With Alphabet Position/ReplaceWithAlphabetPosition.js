// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(as a string)

// let text = "The sunset sets at t...welve o' clock.";
let text = "the sunSet of 092_ s sfkljka isekla ds";


function alphabetPosition(text) {
    const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let result = '';
    let smText = text.toLowerCase()
    for (let i = 0; i < smText.length; i++) {
        const element = smText[i];
        for (let j = 0; j < arr2.length; j++) {
            const element2 = arr2[j];
            if (element === element2) {
                result = result + String(j + 1) + ' '
            }
        }
    }
    return result.trim()
}

const res = alphabetPosition(text)
console.log(res)