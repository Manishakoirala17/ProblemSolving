
function sumOfBiggestNumber(number1, number2) {
    let length = number1.length;
    let sum = [];
    let carry = 0;
    for (let index = length - 1; index >= 0; index--) {
        let add = parseInt(number1[index]) + parseInt(number2[index]) + carry;
        carry = Math.floor(add / 10);
        let remain = add % 10;
        sum[index] = index == 0 ? (remain + carry * 10).toString() : sum[index] = remain.toString();
    }

    return sum.join("");
}
let num1 = "888888888";
let num2 = "666666666";

let additon = sumOfBiggestNumber(num1, num2)

console.log(additon);