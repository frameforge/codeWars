import re


def binaryDivisibleBy(string, divisible=3):
    # Regular expression for only 0 and 1 digits
    regex = r"^[01]+$"

    # Check if string contains only 0s and 1s
    is_zero_one = re.match(regex, string)

    if is_zero_one:
        # Convert string to integer
        convert_to_num = int(is_zero_one.group(), 2)

        # Check if number is divisible by divisible
        if convert_to_num % divisible == 0:
            return True
        else:
            return False
    else:
        return False


textCase1 = binaryDivisibleBy("000")
print(textCase1)

textCase2 = binaryDivisibleBy("011")
print(textCase2)

textCase3 = binaryDivisibleBy("001")
print(textCase3)
