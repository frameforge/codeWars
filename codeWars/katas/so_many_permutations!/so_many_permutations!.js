// So Many Permutations!

function permutations(str) {
    const results = [];

    // Convert the string to an array for easier manipulation
    const chars = str.split('');

    // Recursive helper function to generate permutations
    function generate(current, remaining) {
        if (remaining.length === 0) {
            results.push(current.join(''));
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const next = current.concat(remaining[i]);
                const remainingChars = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
                generate(next, remainingChars);
            }
        }
    }

    // Start the generation process
    generate([], chars);

    // Remove duplicates using Set and convert back to an array
    const uniqueResults = [...new Set(results)];

    return uniqueResults;
}

console.log(permutations('a')); // Output: ['a']
console.log(permutations('ab')); // Output: ['ab', 'ba']
console.log(permutations('abc')); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutations('aabb')); // Output: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
