// Write_Number_in_Expanded_Form
export {};

function expandedForm(num: number): string {
  let newNum: number = num;
  let expand: number[] = [];
  while (true) {
    const divider: number = Number(1 + "0".repeat(String(newNum).length - 1));
    if (newNum % divider !== 0) {
      expand.push(newNum - (newNum % divider));
      newNum = newNum % divider;
    } else {
      expand.push(newNum);
      break;
    }
  }
  const res: string = expand.toString().replaceAll(",", " + ");
  return res;
}

const expend_1: string = expandedForm(12359); // '10 + 2'
const expend_2: string = expandedForm(42); // '40 + 2'
const expend_3: string = expandedForm(70304); // '70000 + 300 + 4'

console.log(expend_3);
