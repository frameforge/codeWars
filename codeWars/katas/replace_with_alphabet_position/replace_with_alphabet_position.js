// alphabetPosition("The sunset sets at twelve o' clock.") return => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


function replace_with_alphabet_position(text) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let result = '';
    let smText = text.toLowerCase()
    for (let i = 0; i < smText.length; i++) {
        const element = smText[i];
        for (let j = 0; j < letters.length; j++) {
            const element2 = letters[j];
            if (element === element2) {
                result = result + String(j + 1) + ' '
            }
        }
    }
    console.log(result.trim())
    return result.trim()
}


let testText = "the sunSet of 092_ s sfkljka isekla ds";
replace_with_alphabet_position(testText)