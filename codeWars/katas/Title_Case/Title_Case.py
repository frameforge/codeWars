# titleCase("a clash of KINGS", "a an the of");

def titleCase(title, minorWords=""):
    words = title.lower().split()
    minors = minorWords.lower().split()
    initial = ""

    for i in words:
        initial = (
            (
                initial + i.capitalize() + " "
                if initial.__len__() == 0
                else initial + i + " "
            )
            if i in minors or initial.__len__() == 0
            else initial + i.capitalize() + " "
        )

    print(initial.strip())
    return initial

titleCase("a clash of KINGS", "a an the of")
titleCase("THE WIND IN THE WILLOWS", "The In")
titleCase("the quick brown fox")
