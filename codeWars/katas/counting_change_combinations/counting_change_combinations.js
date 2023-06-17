// Counting Change Combinations

function countChange(amount, denominations) {
    const ways = new Array(amount + 1).fill(0);
    ways[0] = 1;

    for (const coin of denominations) {
        for (let i = coin; i <= amount; i++) {
            ways[i] += ways[i - coin];
        }
    }

    return ways[amount];
}

console.log(countChange(4, [1, 2]));  // Output: 3
console.log(countChange(10, [5, 2, 3]));  // Output: 4
console.log(countChange(11, [5, 7]));  // Output: 0
