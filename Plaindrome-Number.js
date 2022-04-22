/**
 * @param {number} x
 * @return {boolean}
 * problem : https://leetcode.com/problems/palindrome-number/
 */
var isPalindrome = function(x) {
    let number=String(x);
    let left=0;
    let right=number.length-1;
    while(left<right){
        if(number[left]!=number[right])
            return false;
        left+=1;
        right-=1;
        
    }
    return true;
};