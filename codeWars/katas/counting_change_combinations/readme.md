# Count Change

This function counts the number of different ways you can make change for an amount of money, given an array of coin denominations. It assumes that you have an infinite amount of coins available.

## Usage

```javascript
const countChange = (amount, denominations) => {
  // Implementation code
};

console.log(countChange(4, [1, 2])); // Output: 3
console.log(countChange(10, [5, 2, 3])); // Output: 4
console.log(countChange(11, [5, 7])); // Output: 0
```

## Parameters

- amount: The amount of money to make change for.
- denominations: An array of unique coin denominations.

## Return Value

The function returns the count of different ways to make change for the given amount using the provided coin denominations.

## Examples

- countChange(4, [1, 2]) returns 3. (e.g., 1+1+1+1, 1+1+2, 2+2)
- countChange(10, [5, 2, 3]) returns 4. (e.g., 2+2+2+2+2, 5+2+2+1, 5+5, 10)
- countChange(11, [5, 7]) returns 0. (No combinations of coins can add up to 11)

## Notes

- The order of coins does not matter. For example, 1+1+2 is considered the same as 2+1+1.
- The function assumes that the input denominations are unique and the amount is a positive integer.
- If the amount is 0, the function will return 1, assuming that there is one way to make change (by not using any coins).

## Languages

- javascript
- python

## Contributors

- @0ME9A
