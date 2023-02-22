// The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const Bit_Counting = function (n) {
    const obj = n.toString(2).split("");
    const filter_1 = obj.filter((i) => i == 1 && i);
    // console.log(filter_1.length)
    return filter_1.length;
};

Bit_Counting(7)
Bit_Counting(9)
Bit_Counting(10)