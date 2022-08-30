// Replace with alphabet Position

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