# Counting Change Combinations


def countChange(amount, denominations):
    # Create a list to store the number of ways to make change for each amount up to the target amount
    ways = [0] * (amount + 1)

    # There is one way to make change for an amount of zero
    ways[0] = 1

    # Iterate through each coin denomination
    for coin in denominations:
        # For each coin, iterate through all amounts from the coin value up to the target amount
        for i in range(coin, amount + 1):
            # Add the number of ways to make change without using the current coin
            # and the number of ways to make change using the current coin
            ways[i] += ways[i - coin]

    # Return the number of ways to make change for the target amount
    return ways[amount]


print(countChange(4, [1, 2]))  # Output: 3
print(countChange(10, [5, 2, 3]))  # Output: 4
print(countChange(11, [5, 7]))  # Output: 0
