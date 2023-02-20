// titleCase("a clash of KINGS", "a an the of");

function titleCase(title, minorWords) {
    const words = title.toLowerCase().split(" ");
    const minor = minorWords.toLowerCase().split(" ");
    let initial = "";

    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        if (!minor.includes(element)) {
            initial = initial + element.replace(element[0], element[0].toUpperCase()) + " ";
        } else {
            initial = initial + element + " ";
        }
    }

    const result = initial.replace(initial[0], initial[0].toUpperCase()).trim();

    // console.log(result);
    return result
}
