/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 * 
 * https://leetcode.com/problems/shift-2d-grid/
 */
var shiftGrid = function (grid, k) {
    const NumberOfShifts = k % (grid.length * grid[0].length);
    let gridAfterShifts = []
    for (let i = 0; i < grid.length; i++) {
        let array = new Array(grid[0].length).fill(0);
        gridAfterShifts.push(array);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let columnIndex = (k + j) % grid[0].length;
            let temp = Math.floor((k + j) / (grid[0].length)) + i;
            let rowindex = temp % grid.length;
            gridAfterShifts[rowindex][columnIndex] = grid[i][j]
        }
    }
    return gridAfterShifts;
};