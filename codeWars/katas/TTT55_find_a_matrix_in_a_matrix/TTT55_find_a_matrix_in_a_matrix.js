// T.T.T.55: Find a matrix in a matrix


function findMatrixIn(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let maxSubMatrixSize = 0;
    let subMatrixRow = -1;
    let subMatrixCol = -1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let countZeros = 0;
            let countOnes = 0;

            for (let x = i; x < rows; x++) {
                for (let y = j; y < cols; y++) {
                    if (matrix[x][y] === 0) {
                        countZeros++;
                    } else {
                        countOnes++;
                    }

                    if (countZeros === countOnes && (x - i + 1) * (y - j + 1) > maxSubMatrixSize) {
                        maxSubMatrixSize = (x - i + 1) * (y - j + 1);
                        subMatrixRow = i;
                        subMatrixCol = j;
                    }
                }
            }
        }
    }

    if (maxSubMatrixSize === 0) {
        return [];
    }

    const subMatrix = [];

    for (let i = subMatrixRow; i < subMatrixRow + maxSubMatrixSize ** 0.5; i++) {
        const row = [];

        for (let j = subMatrixCol; j < subMatrixCol + maxSubMatrixSize ** 0.5; j++) {
            row.push(matrix[i][j]);
        }

        subMatrix.push(row);
    }

    return subMatrix;
}


const matrix1 = [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1]
];
const result1 = findMatrixIn(matrix1);
console.log(result1);
// Output: [
//   [1, 1],
//   [0, 0]
// ]

const matrix2 = [
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
    [0, 0, 0, 1]
];
const result2 = findMatrixIn(matrix2);
console.log(result2);
// Output: [
//   [1, 1, 1, 0],
//   [0, 0, 0, 1],
//   [1, 1, 1, 0],
//   [0, 0, 0, 1]
// ]