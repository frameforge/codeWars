// List Filtring

function filter(l) {
    const bigL = [...l]
    newArrray = []
    index = 0
    for (let i = 0; i < bigL.length; i++) {
        const element = bigL[i];
        if (typeof element === "string") {
            newArrray[index] = element
            index++
        }
    }
    return newArrray
}

const theFilter = filter([1, 2, 'a', 'b', 'x', '5.5', 3.3, [2, 'd', 'f'], 'e'])
console.log(theFilter)