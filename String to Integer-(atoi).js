/**
 * @param {string} s
 * @return {number}
 * problem : https://leetcode.com/problems/string-to-integer-atoi/
 */
let numbers=['0','1','2','3','4','5','6','7','8','9'];
let biggestnumber=2**31-1;
let smallestnumber=-1*(2**31)
var myAtoi = function(s) {
    let temp='';
    let signed=[];
    for(let i=0;i<s.length;i++){
        if(numbers.indexOf(s[i])!=-1){
         temp+=s[i]; 
            
        }
        else if(s[i]==' ' && signed.length==0){
            if( temp.length!=0)
            break;
            continue;
        }
        else if((s[i]=='-'||s[i]=='+') && temp.length==0){
            if( signed.length!=0)
                break;
            
            signed.push(s[i]);
        }
        else
            break;
           
        
        
        
    }
    let number=temp.length? parseInt(signed.length?signed[0]+temp:temp):0;
    if(number>biggestnumber)
        number=biggestnumber;
     if(number<smallestnumber){
        number=smallestnumber;
        
     }
    
    
    
    return number;
};