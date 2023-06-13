# Permutations

This JavaScript function generates all permutations of a non-empty input string and removes duplicates, if present.

## Usage

The `permutations` function takes a string as input and returns an array containing all possible permutations of the input string. The function uses a recursive approach to generate permutations and removes duplicates using a Set.

Example usage:

```javascript
console.log(permutations('a')); // Output: ['a']
console.log(permutations('ab')); // Output: ['ab', 'ba']
console.log(permutations('abc')); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutations('aabb')); // Output: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
