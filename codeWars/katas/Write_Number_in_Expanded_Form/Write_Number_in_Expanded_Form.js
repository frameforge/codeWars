// Write_Number_in_Expanded_Form

function expandedForm(num) {
    let newNum = num;
    let expand = [];
    if (typeof num === "number") {
        while (true) {
            const divider = Number(1 + "0".repeat(String(newNum).length - 1));
            if (newNum % divider !== 0) {
                expand.push(newNum - (newNum % divider));
                newNum = newNum % divider;
            } else {
                expand.push(newNum);
                break;
            }
        }
        const res = expand.toString().replaceAll(",", " + ");
        return res;
    } else return NaN;
}

const expend_1 = expandedForm("12359d"); // '10 + 2'
const expend_2 = expandedForm(42); // '40 + 2'
const expend_3 = expandedForm(70304); // '70000 + 300 + 4'

console.log(expend_3);