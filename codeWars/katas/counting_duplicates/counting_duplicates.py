# Counting Duplicates


def count_duplicates(string):
    char_count = {}

    # Convert the string to lowercase to make the comparison case-insensitive
    lower_case_str = string.lower()

    # Count the occurrences of each character
    for char in lower_case_str:
        char_count[char] = char_count.get(char, 0) + 1

    # Count the characters that occur more than once
    duplicate_count = 0
    for count in char_count.values():
        if count > 1:
            duplicate_count += 1

    return duplicate_count


result1 = count_duplicates("abcde")
print(result1)
# Output: 0

result2 = count_duplicates("aabbcde")
print(result2)
# Output: 2

result3 = count_duplicates("aabBcde")
print(result3)
# Output: 2
