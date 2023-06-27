// Breaking chocolate problem
export {};

function breakChocolate(n: number, m: number): number {
  if (n <= 0 || m <= 0) {
    return 0; // Invalid input, no breaks needed
  }

  return n * m - 1; // Minimum number of breaks needed
}

console.log(breakChocolate(2, 1)); // Output: 1
console.log(breakChocolate(3, 1)); // Output: 2
console.log(breakChocolate(0, 5)); // Output: 0 (Invalid input)
console.log(breakChocolate(4, 4)); // Output: 15
