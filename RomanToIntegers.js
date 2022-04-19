/**
 * @param {string} s
 * @return {number}
 * problem : https://leetcode.com/problems/roman-to-integer/
 */
let symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
let values = [1, 5, 10, 50, 100, 500, 1000];
var romanToInt = function (s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i - 1 >= 0) {
            if (symbols.indexOf(s[i]) > symbols.indexOf(s[i - 1])){
                result += values[symbols.indexOf(s[i])] - 2 * values[symbols.indexOf(s[i - 1])];
            continue;
             }
        } 
            result += values[symbols.indexOf(s[i])];
        
    }
    return result;

};