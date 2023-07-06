# Square Every Digit


def square_digits(num):
    numString = str(num)
    result = ""

    for i in numString:
        result += str(int(i) ** 2)

    return result


print(square_digits(9119))  # Output: 811181
print(square_digits(765))  # Output: 493625
