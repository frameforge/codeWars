// Counting Duplicates

function countDuplicates(str) {
    const charCount = {};

    // Convert the string to lowercase to make the comparison case-insensitive
    const lowerCaseStr = str.toLowerCase();

    // Count the occurrences of each character
    for (let char of lowerCaseStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Count the characters that occur more than once
    let duplicateCount = 0;
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicateCount++;
        }
    }

    return duplicateCount;
}

const result1 = countDuplicates("abcde");
console.log(result1);
// Output: 0

const result2 = countDuplicates("aabbcde");
console.log(result2);
// Output: 2

const result3 = countDuplicates("aabBcde");
console.log(result3);
// Output: 2