// T.T.T.55: Find a matrix in a matrix
export {};

function findMatrixIn(matrix: number[][]): number[][] {
  const rows: number = matrix.length;
  const cols: number = matrix[0].length;

  let maxSubMatrixSize: number = 0;
  let subMatrixRow: number = -1;
  let subMatrixCol: number = -1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let countZeros: number = 0;
      let countOnes: number = 0;

      for (let x = i; x < rows; x++) {
        for (let y = j; y < cols; y++) {
          if (matrix[x][y] === 0) {
            countZeros++;
          } else {
            countOnes++;
          }

          if (
            countZeros === countOnes &&
            (x - i + 1) * (y - j + 1) > maxSubMatrixSize
          ) {
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

  const subMatrix: number[][] = [];

  for (
    let i = subMatrixRow;
    i < subMatrixRow + Math.sqrt(maxSubMatrixSize);
    i++
  ) {
    const row: number[] = [];

    for (
      let j = subMatrixCol;
      j < subMatrixCol + Math.sqrt(maxSubMatrixSize);
      j++
    ) {
      row.push(matrix[i][j]);
    }

    subMatrix.push(row);
  }

  return subMatrix;
}

const matrix1: number[][] = [
  [1, 1, 1],
  [0, 0, 0],
  [1, 1, 1],
];
const result1: number[][] = findMatrixIn(matrix1);
console.log(result1);
// Output: [
//   [1, 1],
//   [0, 0]
// ]

const matrix2: number[][] = [
  [1, 1, 1, 0],
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [0, 0, 0, 1],
];
const result2: number[][] = findMatrixIn(matrix2);
console.log(result2);
// Output: [
//   [1, 1, 1, 0],
//   [0, 0, 0, 1],
//   [1, 1, 1, 0],
//   [0, 0, 0, 1]
// ]
