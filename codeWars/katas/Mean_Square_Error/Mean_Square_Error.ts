// Mean Square Error
export {};

function Mean_Square_Error(
  firstArray: Array<number>,
  secondArray: Array<number>
): number {
  let sum: number = 0;
  for (let i in firstArray) {
    const compareElement: number = firstArray[i] - secondArray[i];
    sum += compareElement * compareElement;
  }

  return sum / firstArray.length;
}

const array_I: Array<number> = [10, 20, 10, 2];
const array_II: Array<number> = [10, 25, 5, -2];

const run: number = Mean_Square_Error(array_I, array_II);
console.log(run);
