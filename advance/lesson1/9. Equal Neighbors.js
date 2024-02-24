function neigbours(matrix) {
    let pairs = 0;

    matrix.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === row[j + 1]) { // find the neigbours, left and right on the same row
                pairs++;
            }
            if (matrix[i + 1] && el === matrix[i + 1][j]) { // find the neigbouts from the row above and bellow
                pairs++
            }
            if (matrix[i + 1] && (el === matrix[i + 1][j - 1] || el === matrix[i + 1][j + 1])) { // find the diagonal neighbours
                pairs++
            }
        });
    });
    console.log(pairs);
}
neigbours(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '2', '7', '5', '4']])

neigbours([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']])