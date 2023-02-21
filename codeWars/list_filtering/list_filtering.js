// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
    const bigL = [...l]
    newArr = []
    index = 0
    for (let i = 0; i < bigL.length; i++) {
        const element = bigL[i];
        if (typeof element === "string") {
            newArr[index] = element
            index++
        }
    }
    return newArr
}

const filter = filter_list([1, 2, 'a', 'b', 'x', '5.5', 3.3, [2, 'd', 'f'], 'e'])
console.log(filter)