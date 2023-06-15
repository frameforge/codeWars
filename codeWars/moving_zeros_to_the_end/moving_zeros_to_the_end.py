# Moving Zeros To The End

def moveZeros(array):
    zerosCount = 0
    length = len(array)

    for i in range(length):
        if array[i] != 0:
            array[i - zerosCount] = array[i]
        else:
            zerosCount += 1

    for i in range(length - zerosCount, length):
        array[i] = 0

    return array


moveZ = moveZeros([False, 1, 0, 1, 2, 0, 1, 3, "a"])
print(moveZ)
