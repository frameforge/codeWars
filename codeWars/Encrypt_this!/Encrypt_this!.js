// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = text => text
    .split(' ')
    .map(word => word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0)))
    .join(' ');


encryptThis("A") // "65";
encryptThis("A wise old owl lived in an oak") // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"   