# Hamming Distance


def hamming_distance(a, b):
    if len(a) != len(b):
        raise ValueError("Strings must have equal length")

    distance = 0
    for i in range(len(a)):
        if a[i] != b[i]:
            distance += 1

    return distance


a = "I like turtles"
b = "I like turkeys"
print(hamming_distance(a, b))  # Output: 3
