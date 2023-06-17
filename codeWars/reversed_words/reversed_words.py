# reversed words


def reverse_words(str):
    return " ".join(str.split()[::-1])


print(reverse_words("hello world!"))
# Output: "world! hello"
print(reverse_words("The greatest victory is that which requires no battle"))
# battle no requires which that is victory greatest The
