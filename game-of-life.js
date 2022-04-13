/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let temp = [];
    for (let i = 0; i < board.length; i++) {
        let array = new Array(board[0].length).fill(0);
        temp.push(array);
    }

    let boardColumnLength = board.length
    let boardRowLength = board[0].length
    for (let i = 0; i < boardColumnLength; i++) {
        for (let j = 0; j < boardRowLength; j++) {
            if (board[i][j] == 0)
                temp[i][j] = 0;
            else
                temp[i][j] = 1
        }
    }
    for (let i = 0; i < boardColumnLength; i++) {
        for (let j = 0; j < boardRowLength; j++) {
            let counter = 0;
            if ((j + 1) < boardRowLength && temp[i][j + 1] == 1) {
                counter += 1

            }
            if ((j - 1) >= 0 && temp[i][j - 1] == 1) {
                counter += 1

            }
            if ((i + 1) < boardColumnLength && temp[i + 1][j] == 1) {
                counter += 1

            }
            if ((i - 1) >= 0 && temp[i - 1][j] == 1) {
                counter += 1

            }
            if ((j + 1) < boardRowLength && (i + 1) < boardColumnLength && temp[i + 1][j + 1] == 1) {
                counter += 1
            }
            if ((j + 1) < boardRowLength && (i - 1) >= 0 && temp[i - 1][j + 1] == 1) {
                counter += 1
            }
            if ((j - 1) >= 0 && (i + 1) < boardColumnLength && temp[i + 1][j - 1] == 1) {
                counter += 1
            }
            if ((j - 1) >= 0 && (i - 1) >= 0 && temp[i - 1][j - 1] == 1) {
                counter += 1
            }
            if (counter < 2)
                board[i][j] = 0;
            else if (counter == 2 && board[i][j] == 1)
                board[i][j] = 1;
            else if (counter == 3) {
                board[i][j] = 1
            }
            else
                board[i][j] = 0

        }

    }
};