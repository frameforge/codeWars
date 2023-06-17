// spinWords( "This is a test") => returns "This is a test" 

function spinWords(string) {
    const words = string.split(" ");
    let result = "";

    for (let i in words) {
        const element = words[i];
        if (element.length >= 5) {
            let reverse = "";
            for (let i in element) {
                reverse = reverse + element[element.length - i - 1];
            }
            result = result + reverse + " ";
        } else {
            result = result + element + " ";
        }
    }

    //   console.log(result.trim());
    return result.trim();
}


spinWords("Hey fellow warriors") // "Hey wollef sroirraw"
spinWords("This is a test") // "This is a test"
spinWords("This is another test") // "This is rehtona test"