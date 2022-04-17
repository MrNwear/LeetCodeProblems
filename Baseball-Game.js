/**
 * @param {string[]} ops
 * @return {number}
 * problem : https://leetcode.com/problems/baseball-game/
 */
function sum(array) {
    let summation = 0;
    for (let i = 0; i < array.length; i++) {
        summation += array[i];
    }
    return summation;
}
var calPoints = function (ops) {
    let temp = []
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] == 'C') {
            temp.pop()
        }
        else if (ops[i] == 'D') {
            temp.push(temp[temp.length - 1] * 2);
        }
        else if (ops[i] == '+') {
            temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
        }
        else {
            temp.push(parseInt(ops[i]));
        }


    }
    return sum(temp);
};