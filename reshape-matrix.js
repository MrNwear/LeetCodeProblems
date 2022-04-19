/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * problem : https://leetcode.com/problems/reshape-the-matrix/
 */
var matrixReshape = function (mat, r, c) {
    let matrixWidth = mat.length;
    let matrixHeight = mat[0].length;
    let currentRow = 0;
    let currentColumn = 0;
    let temp = []

    if (matrixWidth * matrixHeight != r * c)
        return mat;
    for (let i = 0; i < r; i++) {
        let array = new Array(c).fill(0);
        temp.push(array);
    }
    for (let i = 0; i < matrixWidth; i++) {
        for (let j = 0; j < matrixHeight; j++) {

            if (currentColumn < c) {
                temp[currentRow][currentColumn] = mat[i][j];
                currentColumn += 1;
            }
            else {
                currentRow += 1;
                currentColumn = 0;
                temp[currentRow][currentColumn] = mat[i][j];
                currentColumn += 1
            }

        }
    }
    return temp;

};