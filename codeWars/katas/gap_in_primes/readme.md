# Prime Gap

The prime numbers are not regularly spaced. A prime gap of length `n` is a run of `n-1` consecutive composite numbers between two successive primes.

This algorithm finds the first pair of prime numbers with a specific gap within a given range.

## Function Signature

```python
def gap(g, m, n):
    # Function implementation
```

## Parameters

- g (integer >= 2): Indicates the gap we are looking for.
- m (integer > 2): Gives the start of the search range (inclusive).
- n (integer >= m): Gives the end of the search range (inclusive).

## Return Value

The function returns the first pair of prime numbers with a gap of g within the range from m to n, inclusive. The pair is returned as a list [a, b], where a and b are the prime numbers. If no such pair is found, the function returns nil, null, None, or an empty value depending on the programming language.

## Example

```python
result1 = gap(2, 5, 7)
print(result1)  # Output: [5, 7]

result2 = gap(2, 5, 5)
print(result2)  # Output: None (or specific language-dependent value)

result3 = gap(4, 130, 200)
print(result3)  # Output: [163, 167]

result4 = gap(6, 100, 110)
print(result4)  # Output: None (
```

- In the first example, the function is called with g = 2, m = 5, and n = 7. It returns [5, 7] as the first pair of prime numbers with a gap of 2 between 5 and 7.

- In the second example, the function is called with g = 2, m = 5, and n = 5. Since there are no prime numbers with a gap of 2 within this range, it returns None or a specific language-dependent value.

- In the third example, the function is called with g = 4, m = 130, and n = 200. It returns [163, 167] as the first pair of prime numbers with a gap of 4 between 130 and 200.

- In the fourth example, the function is called with g = 6, m = 100, and n = 110. Since there are no prime numbers with a gap of 6 within this range, it returns None or a specific language-dependent value.

- Please refer to the sample tests for more examples of expected return values.

### Note for Go: When no prime gap is found between m and n, the function is expected to return a nil slice.

_For example: gap(11, 30000, 100000) --> nil_

## Languages

- javascript
- python

## Contributors

- @0ME9A
