// ROT13 Encryption/Decryption

function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function (char) {
        const charCode = char.charCodeAt(0);
        const baseCharCode = charCode <= 90 ? 65 : 97;
        return String.fromCharCode((charCode - baseCharCode + 13) % 26 + baseCharCode);
    });
}

const example1 = "EBG13 rknzcyr.";
const example2 = "This is my first ROT13 exercise!";

console.log(rot13(example1)); // Output: "ROT13 example."
console.log(rot13(example2)); // Output: "Guvf vf zl svefg EBG13 rkprepvfr!"
