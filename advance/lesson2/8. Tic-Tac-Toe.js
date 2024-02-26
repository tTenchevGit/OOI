function ticTacToe(input) {
    let matrix = [[false, false, false], [false, false, false], [false, false, false]];
    let player = 'X';
    let gameEnded = false;

    input.forEach(line => {
        if (!gameEnded) {
            let [row, col] = line.split(" ").map(num => Number(num));
            if (!matrix[row][col]) {
                matrix[row][col] = player;
                if (ifWins(matrix, player)) {
                    console.log(`Player ${player} wins!`);
                    gameEnded = true;
                    console.log(matrix.map(row => row.join('\t')).join('\n'));
                    return;
                }
                player = player === 'X' ? 'O' : 'X';
            } else {
                console.log("This place is already taken. Please choose another!");
            }
            
            if (matrix.every(row => row.every(el => el !== false))) {
                console.log(`The game ended! Nobody wins :(`);
            console.log(matrix.map(row => row.join('\t')).join('\n'));
                gameEnded = true;
            }
        }
    });

    function ifWins(matrix, player) {
        const winConditions = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        return winConditions.some(condition => condition.every(([row, col]) => matrix[row][col] === player));
    }
}

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
