/**
 * @param {number[]} height
 * @return {number}
 * problem : https://leetcode.com/problems/container-with-most-water/
 */
var maxArea = function (height) {

    let max = 0;
    let lastIndex = height.length - 1;
    let i = 0;
    while (lastIndex > i) {
        max = Math.max(max, (lastIndex - i) * Math.min(height[i], height[lastIndex]));
        if (height[i] > height[lastIndex]) {
            lastIndex -= 1;
        }
        else
            i += 1;
    }
    return max;
};