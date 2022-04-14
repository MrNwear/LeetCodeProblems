/**
 * @param {number} n
 * @return {number[][]}
 * https://leetcode.com/problems/spiral-matrix-ii/
 */

function changeDirection(rowdirection, columndirection) {

    if (rowdirection == 0 && columndirection == 1) {

        columndirection = 0;
        rowdirection = 1;
    } else if (columndirection == 0 && rowdirection == 1) {
        rowdirection = 0;
        columndirection = -1;
    } else if (columndirection == -1 && rowdirection == 0) {

        rowdirection = -1;
        columndirection = 0;
    } else if (rowdirection == -1 && columndirection == 0) {
        columndirection = 1;
        rowdirection = 0;
    }
    return [rowdirection, columndirection]
}
var generateMatrix = function (n) {
    let rowdirection = 0, columndirection = 1;


    let matrix = []
    for (let i = 0; i < n; i++) {
        let array = new Array(n).fill(0);
        matrix.push(array);
    }
    let num = 1;
    let row = 0, col = 0;
    while (num <= n * n) {

        matrix[row][col] = num;

        let tempRow = row + rowdirection;
        let tempCol = col + columndirection;

        //Condition to change direction 
        if (tempRow < 0 || tempCol < 0 || tempRow == n || tempCol == n || matrix[tempRow][tempCol] != 0) {
            [rowdirection, columndirection] = changeDirection(rowdirection, columndirection);
        }

        row += rowdirection;
        col += columndirection;

        num++;
    }
    return matrix;

};