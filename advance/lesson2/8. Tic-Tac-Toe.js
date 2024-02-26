function ticTacToe(matrix) {
    
    let dashboard = 

    matrix.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === row[j + 1]) { // find the neigbours, left and right on the same row
                
            }
            if (matrix[i + 1] && el === matrix[i + 1][j]) { // find the neigbouts from the row above and bellow
                
            }
            if (matrix[i + 1] && (el === matrix[i + 1][j - 1] || el === matrix[i + 1][j + 1])) { // find the diagonal neighbours
                
            }
        });
    });

}
ticTacToe(["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 1",

"1 2",

"2 2",

"2 1",

"0 0"] )