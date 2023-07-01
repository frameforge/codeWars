// Hamming Distance


function hammingDistance(a, b) {
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

const a = "I like turtles";
const b = "I like turkeys";
console.log(hammingDistance(a, b)); // Output: 3
