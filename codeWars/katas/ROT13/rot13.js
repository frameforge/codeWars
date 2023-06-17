// ROT13 Encryption/Decryption

function rot13(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            result += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            result += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        } else {
            // Non-alphabetic characters
            result += str.charAt(i);
        }
    }
    return result;
}

const example1 = "EBG13 rknzcyr.";
const example2 = "This is my first ROT13 excercise!";

console.log(rot13(example1)); // Output: "ROT13 example."
console.log(rot13(example2)); // Output: "Guvf vf zl svefg EBG13 rkprepvfr!"
