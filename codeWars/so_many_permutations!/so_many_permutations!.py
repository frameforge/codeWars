# So Many Permutations!

def permutations(string):
    results = set()

    # Recursive helper function to generate permutations
    def generate(current, remaining):
        if len(remaining) == 0:
            results.add(''.join(current))
        else:
            for i in range(len(remaining)):
                next_permutation = current + [remaining[i]]
                remaining_chars = remaining[:i] + remaining[i+1:]
                generate(next_permutation, remaining_chars)

    # Convert the string to a list of characters for easier manipulation
    chars = list(string)

    # Start the generation process
    generate([], chars)

    # Sort the permutations and return the result
    return sorted(list(results))


print(permutations('a'))     # Output: ['a']
print(permutations('ab'))    # Output: ['ab', 'ba']
print(permutations('abc'))   # Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
print(permutations('aabb'))  # Output: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
