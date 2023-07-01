// Hamming Distance

function hammingDistance(a: string, b: string): number {
  if (a.length !== b.length) {
    throw new Error("Strings must have equal length");
  }

  let distance = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      distance++;
    }
  }

  return distance;
}

const a: string = "I like turtles";
const b: string = "I like turkeys";
console.log(hammingDistance(a, b)); // Output: 3
