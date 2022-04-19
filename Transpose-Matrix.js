/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * problem : https://leetcode.com/problems/transpose-matrix/
 */
var transpose = function (matrix) {
    let temp = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let array = new Array(matrix.length).fill(0);
        temp.push(array);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++)
            temp[j][i] = matrix[i][j]
    }
    return temp;
};