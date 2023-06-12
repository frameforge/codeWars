# ROT13 Encryption/Decryption

def rot13(str):
    result = ""
    for char in str:
        char_code = ord(char)
        if char.isalpha():
            if char.isupper():
                # Uppercase letters
                result += chr(((char_code - 65 + 13) % 26) + 65)
            else:
                # Lowercase letters
                result += chr(((char_code - 97 + 13) % 26) + 97)
        else:
            # Non-alphabetic characters
            result += char
    return result

example1 = "EBG13 rknzcyr."
example2 = "This is my first ROT13 excercise!"

print(rot13(example1))  # Output: "ROT13 example."
print(rot13(example2))  # Output: "Guvf vf zl svefg EBG13 rkprepvfr!"
