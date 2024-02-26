function checkWinner(board) {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return board[i][0];
        }
        if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return board[0][i];
        }
    }
    // Check diagonals
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }
    return null;
}

function printBoard(board) {
    for (let i = 0; i < 3; i++) {
        console.log(board[i].map(cell => cell ? cell : '_').join('\t'));
    }
}

function ticTacToe(moves) {
    const board = [[false, false, false], [false, false, false], [false, false, false]];
    let currentPlayer = 'X';
    let movesLeft = 9;

    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i];
        if (board[row][col]) {
            console.log("This place is already taken. Please choose another!");
            return;
        }
        board[row][col] = currentPlayer;
        movesLeft--;

        const winner = checkWinner(board);
        if (winner) {
            console.log(`Player ${winner} wins`);
            printBoard(board);
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    if (movesLeft === 0) {
        console.log("The game ended! Nobody wins :(");
    }
}

// Example usage:
const moves = ["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 2", ] 
ticTacToe(moves);
