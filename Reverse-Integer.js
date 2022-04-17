/**
 * @param {number} x
 * @return {number}
 * problem : https://leetcode.com/problems/reverse-integer/
 */
var reverse = function (x) {
    var signed = 1
    if (x < 0) {
        signed *= -1;
        x = x * -1;

    }

    var result = 0
    var d = 10;


    while (x > 0) {
        let remainder = x % 10;
        result = result * d + remainder;
        x = Math.floor(x / 10);


    }
    if (result >= 2 ** 31 - 1)
        return 0;
    if (result < signed * 2 ** 31 && signed == -1)
        return 0;
    return result * signed;
};