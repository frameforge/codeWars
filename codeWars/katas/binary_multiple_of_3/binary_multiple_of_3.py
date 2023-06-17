# Binary multiple of 3

import re


def binary_multiple_of_3(str):
    regex = r"^(0*11*|0*)$"
    return bool(re.match(regex, str))


print(binary_multiple_of_3("000"))  # True
print(binary_multiple_of_3("001"))  # False
print(binary_multiple_of_3("011"))  # True
print(binary_multiple_of_3("110"))  # True
print(binary_multiple_of_3(" abc "))  # False
