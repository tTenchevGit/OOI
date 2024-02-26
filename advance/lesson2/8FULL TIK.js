function ticTacToe(input) {
    let matrix = [[false, false, false], [false, false, false], [false, false, false]];
    let player = 'X';
    let gameEnded = false;

    for (let line of input) {
        if (!gameEnded) {
            let [row, col] = line.split(" ").map(num => Number(num));
            if (!matrix[row][col]) {
                matrix[row][col] = player;
                if (ifWins(matrix, player)) {
                    console.log(`Player ${player} wins!`);
                    gameEnded = true;
                    console.log(`${matrix[0].join('\t')}\n${matrix[1].join('\t')}\n${matrix[2].join('\t')}`);
                    break;
                } else if (matrix.every(row => row.every(el => el !== false))) {
                    console.log(`The game ended! Nobody wins :(`);
                    console.log(`${matrix[0].join('\t')}\n${matrix[1].join('\t')}\n${matrix[2].join('\t')}`);
                    gameEnded = true;
                    break;
                }
                player = player === 'X' ? 'O' : 'X'; 
            } else {
                console.log("This place is already taken. Please choose another!");
            }
        }
    }

    function ifWins(matrix, player) {
        for (let i = 0; i < 3; i++) {
            if ((matrix[i][0] === player &&
                matrix[i][1] === player &&
                matrix[i][2] === player)
                || ((matrix[0][i] === player &&
                    matrix[1][i] === player &&
                    matrix[2][i] === player)
                    || (matrix[0][0] === player &&
                        matrix[1][1] === player &&
                        matrix[2][2] === player)
                    || (matrix[0][2] === player &&
                        matrix[1][1] === player &&
                        matrix[2][0] === player))) {
                return true;
            }
        }
        return false;
    }
}

// ticTacToe([
//     "0 0",

// "0 0",

// "1 1",

// "0 1",

// "1 2",

// "0 2",

// "2 2",

// "1 2",

// "2 2",

// "2 1"
// ]);

ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);
