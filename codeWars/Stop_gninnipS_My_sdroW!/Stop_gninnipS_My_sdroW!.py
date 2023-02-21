# spinWords( "This is a test") => returns "This is a test"


def spinWords(string):
    words = string.split(" ")
    result = ""

    for i in words:
        if i.__len__() >= 5:
            reverse = ""
            for j in range(i.__len__()):
                reverse = reverse + i[-(j + 1)]
            result = result + reverse + " "
        else:
            result = result + i + " "

    # print(result.strip())
    return result.strip()


spinWords("Hey fellow warriors")  # "Hey wollef sroirraw"
spinWords("This is a test")  # "This is a test"
spinWords("This is another test")  # "This is rehtona test"
