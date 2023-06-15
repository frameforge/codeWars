# Gap in Primes


def gap(g, m, n):
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                return False
        return True

    prev_prime = 0

    for num in range(m, n + 1):
        if is_prime(num):
            if num - prev_prime == g:
                return [prev_prime, num]
            prev_prime = num

    return None


# Example 1
result1 = gap(2, 3, 50)
print(result1)  # Output: [3, 5]

# Example 2
result2 = gap(4, 130, 200)
print(result2)  # Output: [163, 167]
