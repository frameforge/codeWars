# Breaking chocolate problem


def breakChocolate(n, m):
    if n <= 0 or m <= 0:
        return 0  # Invalid input, no breaks needed

    return n * m - 1  # Minimum number of breaks needed


print(breakChocolate(2, 1))  # Output: 1
print(breakChocolate(3, 1))  # Output: 2
print(breakChocolate(0, 5))  # Output: 0 (Invalid input)
print(breakChocolate(4, 4))  # Output: 15
