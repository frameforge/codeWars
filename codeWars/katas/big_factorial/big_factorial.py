# 5! is 5 * 4 * 3 * 2 * 1 = 120


def big_factorial(n):
    if type(n) != int or n == 0:
        return 1

    if n < 0:
        return None

    i = 1
    makeFact = 1
    while i <= n:
        makeFact = makeFact * i
        i += 1

    return makeFact


factorial = big_factorial(4)
print(factorial)
