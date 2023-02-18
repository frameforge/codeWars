// createPhoneNumber() // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
    const pureNumber = numbers.toString().replaceAll(',', '')
    const head = `(${pureNumber.slice(0, 3)})`
    const tail = `${pureNumber.slice(3, 6)}-${pureNumber.slice(6)}`
    // console.log(head + " " + tail)
    return head + " " + tail
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])