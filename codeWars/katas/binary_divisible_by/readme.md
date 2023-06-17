# Binary Multiple of 3

In this kata, the task is to create a regular expression that can evaluate binary strings (strings with only 1s and 0s) and determine whether the given string represents a number divisible by 3.

## Description

The function `binaryDivisibleBy` takes a string `string` as input and an optional parameter `divisible` (defaulting to 3). It checks if the input string represents a binary number divisible by `divisible`.

- An empty string will not be evaluated and is not considered divisible by 3.

- The input string should consist only of binary digits (0s and 1s). Any leading zeros are allowed.

- The function returns `True` if the binary number is divisible by `divisible`, and `False` otherwise.

## Examples

```python
binaryDivisibleBy('000')  # True
binaryDivisibleBy('001')  # False
binaryDivisibleBy('011')  # True
binaryDivisibleBy('110')  # True
binaryDivisibleBy(' abc ')  # False
```

## Notes

- The regular expression used in the function is designed to match strings containing only 0s and 1s.

- For a more detailed explanation of how the regular expression and the divisibility check work, refer to the code implementation.

## Languages

- javascript
- python

## Contributors

- @omega
