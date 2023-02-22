// The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function Bit_Counting(n: number): number {
  const obj: string[] = n.toString(2).split("");
  const filter_1: string[] = obj.filter((i: string | number) => i == 1 && i);
  // console.log(filter_1.length);
  return filter_1.length;
}

// Method 2
const Bit_Counting_2 = function (n:number):number {
  return n.toString(2).replaceAll(0, '').length
};

Bit_Counting(7);
Bit_Counting(9);
Bit_Counting(10);
