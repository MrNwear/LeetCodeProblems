/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * problem : https://leetcode.com/problems/remove-element/
 */
var removeElement = function(nums, val) {
    let array=[]
    let indices=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            array.push(nums[i]);
            continue;
        }
        indices.push(i);
    }
    let k=array.length;
    
    for(let i=0;i<indices.length;i++){
        if(array.length>0){
            nums[indices[i]]=array[array.length-1];
            array.pop();
            continue;
        }
        nums[indices[i]]='_';
    }
    return k;
};