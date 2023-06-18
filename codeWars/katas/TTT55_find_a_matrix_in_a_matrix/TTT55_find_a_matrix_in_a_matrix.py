# T.T.T.55: Find a matrix in a matrix


def findMatrixIn(matrix):
    rows = len(matrix)
    cols = len(matrix[0])

    maxSubMatrixSize = 0
    subMatrixRow = -1
    subMatrixCol = -1

    for i in range(rows):
        for j in range(cols):
            countZeros = 0
            countOnes = 0

            for x in range(i, rows):
                for y in range(j, cols):
                    if matrix[x][y] == 0:
                        countZeros += 1
                    else:
                        countOnes += 1

                    if (
                        countZeros == countOnes
                        and (x - i + 1) * (y - j + 1) > maxSubMatrixSize
                    ):
                        maxSubMatrixSize = (x - i + 1) * (y - j + 1)
                        subMatrixRow = i
                        subMatrixCol = j

    if maxSubMatrixSize == 0:
        return []

    subMatrix = []

    for i in range(subMatrixRow, subMatrixRow + int(maxSubMatrixSize**0.5)):
        row = []

        for j in range(subMatrixCol, subMatrixCol + int(maxSubMatrixSize**0.5)):
            row.append(matrix[i][j])

        subMatrix.append(row)

    return subMatrix


matrix1 = [[1, 1, 1], [0, 0, 0], [1, 1, 1]]
result1 = findMatrixIn(matrix1)
print(result1)
# Output: [
#   [1, 1],
#   [0, 0]
# ]

matrix2 = [[1, 1, 1, 0], [0, 0, 0, 1], [1, 1, 1, 0], [0, 0, 0, 1]]
result2 = findMatrixIn(matrix2)
print(result2)
# Output: [
#   [1, 1, 1, 0],
#   [0, 0, 0, 1],
#   [1, 1, 1, 0],
#   [0, 0, 0, 1]
# ]
