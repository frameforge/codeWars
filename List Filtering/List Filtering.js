// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

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