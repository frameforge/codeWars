# Binary Multiple of 3

In this kata, the task is to create a regular expression that can evaluate binary strings (strings with only 1s and 0s) and determine whether the given string represents a number divisible by 3.

## Description

The function `binary_multiple_of_3` takes a string `string` as input and an optional parameter `divisible` (defaulting to 3). It checks if the input string represents a binary number divisible by `divisible`.

- An empty string will not be evaluated and is not considered divisible by 3.

- The input string should consist only of binary digits (0s and 1s). Any leading zeros are allowed.

- The function returns `True` if the binary number is divisible by `divisible`, and `False` otherwise.

## Examples

```python
binary_multiple_of_3('000')  # True
binary_multiple_of_3('001')  # False
binary_multiple_of_3('011')  # True
binary_multiple_of_3('110')  # True
binary_multiple_of_3(' abc ')  # False
```

## Note

- The regular expression ^(0*11*|0\*)$ is used to check if the binary string is divisible by 3.
