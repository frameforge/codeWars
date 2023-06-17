// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

toJadenCase = function (str) {
    // const words = this.split(" ");
    const words = str.split(" ");
    const jadenWords = words.map((i) => i.replace(i[0], i[0].toUpperCase()));
    let result = "";
    for (let i = 0; i < jadenWords.length; i++) {
        const element = jadenWords[i];
        result = result + element + " ";
    }
    // console.log(result.trim())
    return result.trim()
};

var str = "How can mirrors be real if our eyes aren't real";
var str_2 = "If A Book Store Never Runs Out Of A Certain Book, Dose That Mean That Nobody Reads It, Or Everybody Reads It";

toJadenCase(str)
toJadenCase(str_2)