// Mean Square Error

function Mean_Square_Error(firstArray, secondArray) {
    let sum = 0;
    for (let i in firstArray) {
        const compareElement = firstArray[i] - secondArray[i]
        sum += compareElement * compareElement
    }

    return sum / firstArray.length
}

const array_I = [10, 20, 10, 2]
const array_II = [10, 25, 5, -2]

const run = Mean_Square_Error(array_I, array_II)
console.log(run)