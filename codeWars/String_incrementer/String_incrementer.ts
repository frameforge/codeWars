// String incrementer
export {};

function incrementString(string: string | any): string {
  let numSize: number = 0; // right side numbers count
  
  for (let i in string) {
    const reverseLetter: number = string[string.length - 1 - i]; // reverse letter
    const condition: boolean = !isNaN(reverseLetter);
    if (condition) numSize = numSize + 1;
    if (!condition) break;
  }

  const nums: number = Number(string.slice(string.length - numSize)) + 1;
  const zeros: string | number | any = numSize > nums.toFixed().length ? "0".repeat(numSize - nums.toFixed().length) : 0;
  const head: string = string.slice(0, string.length - numSize);
  const tail: string = zeros + nums;

  return head + tail;
}

console.log(incrementString("1")); // 2
console.log(incrementString("foo1")); // foo2
console.log(incrementString("foobar000")); // foobar001
console.log(incrementString("foo")); // foo1
console.log(incrementString("foobar00999")); // foobar01000
console.log(incrementString("fo99obar99")); // fo99obar100
