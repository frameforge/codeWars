# Who likes it?


def format_likes(names):
    num_likes = len(names)

    if num_likes == 0:
        return "no one likes this"
    elif num_likes == 1:
        return f"{names[0]} likes this"
    elif num_likes == 2:
        return f"{names[0]} and {names[1]} like this"
    elif num_likes == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        num_others = num_likes - 2
        return f"{names[0]}, {names[1]} and {num_others} others like this"


# Test Cases
print(format_likes([]))  # Output: "no one likes this"
print(format_likes(["Peter"]))  # Output: "Peter likes this"
print(format_likes(["Jacob", "Alex"]))  # Output: "Jacob and Alex like this"
print(format_likes(["Max", "John", "Mark"]))  # Output: "Max, John and Mark like this"
print(
    format_likes(["Alex", "Jacob", "Mark", "Max"])
)  # Output: "Alex, Jacob and 2 others like this"
