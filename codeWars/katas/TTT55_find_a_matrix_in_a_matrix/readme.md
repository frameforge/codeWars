# Largest Submatrix with Equal Number of 0s and 1s

## Description

Given a matrix (2D array) with rows equal to columns, where each cell contains either 0 or 1, the task is to find the largest submatrix that contains an equal number of 0s and 1s. The submatrix should be a square (i.e., the number of rows equals the number of columns).

Complete the function `findMatrixIn(matrix)` that accepts the matrix as an argument and returns the largest submatrix. If there are multiple possible results, the submatrix with the smaller row and column index should be returned. If no submatrix is found, an empty array should be returned.

## Examples

```javascript
const matrix1 = [
  [1, 1, 1],
  [0, 0, 0],
  [1, 1, 1],
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
  [0, 0, 0, 1],
];
const result2 = findMatrixIn(matrix2);
console.log(result2);
// Output: [
//   [1, 1, 1, 0],
//   [0, 0, 0, 1],
//   [1, 1, 1, 0],
//   [0, 0, 0, 1]
// ]
```

## Constraints

- The matrix will have at least one element.
- The matrix will have an equal number of rows and columns.
- Each cell in the matrix will contain either 0 or 1.

## Languages

- javascript
- python
- typescript

## Contributors

- @omega
