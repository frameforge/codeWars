// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
    const words = string.split(" ");
    let letters = [];
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        for (let j = 0; j < element.length; j++) {
            const elementJ = element[j];
            if (j % 2 === 0) {
                const w1 = elementJ?.toUpperCase();
                letters.push(w1);
            } else {
                const w2 = elementJ;
                letters.push(w2);
            }
        }
    }

    let index = 0;
    for (let l = 0; l < string.length; l++) {
        const element = string[l];
        if (element === " ") {
            letters[l - index] = " " + letters[l - index];
            index++;
        }
    }

    let weirdCase = letters.toString().replaceAll(",", "");
    //   console.log(weirdCase)
    return weirdCase
}