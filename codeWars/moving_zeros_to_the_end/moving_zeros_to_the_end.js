// Moving Zeros To The End

function moveZeros(array) {
    let zerosCount = 0;
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[i] !== 0) {
            array[i - zerosCount] = array[i];
        } else {
            zerosCount++;
        }
    }

    for (let i = length - zerosCount; i < length; i++) {
        array[i] = 0;
    }

    return array;
}

const moveZ = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(moveZ)