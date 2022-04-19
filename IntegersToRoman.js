/**
 * @param {number} num
 * @return {string}
 * problem : https://leetcode.com/problems/integer-to-roman/
 */
var intToRoman = function(num) {
    let value=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let symbols=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let temp='';
   
    for (let i = 0; num ; i++){
          while (num >= value[i]){
           temp += symbols[i] 
            num -= value[i]
          }
    }
       
    
    return temp;
};