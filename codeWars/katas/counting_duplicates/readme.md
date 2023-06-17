# Counting Duplicates

This PHP function counts the number of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in a given input string. It ignores non-alphabetic and non-numeric characters.

## Usage

The function `countDuplicates($string)` takes a string as input and returns the count of duplicates. The input string should only contain alphabets (both uppercase and lowercase) and numeric digits.

### Example

```php
$count = countDuplicates("aabBcde");
echo $count;  // Output: 2
```

```
Input: "abcde"
Output: 0
Explanation: No characters repeat more than once.

Input: "aabbcde"
Output: 2
Explanation: The characters 'a' and 'b' both occur more than once.

Input: "indivisibility"
Output: 1
Explanation: The character 'i' occurs six times.

Input: "ABBA"
Output: 2
Explanation: The characters 'A' and 'B' each occur twice.
```

## Languages

- javascript
- python

## Contributors

- @omega
