# Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
   - The first letter must be converted to its **ASCII** code.
   - The second letter must be switched with the last letter
3. Keeping' it simple: There are no special characters in the input.

## Examples:

    encryptThis("Hello") === "72olle"
    encryptThis("good") === "103doo"
    encryptThis("hello world") === "104olle 119drlo"

## Languages

- javascript

## Contributors

- @omega
