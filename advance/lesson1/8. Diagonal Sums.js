function diagonalSums(matrix) {
    let firstSum = 0;
    let secondsSum = 0;
    let firstCount = 0;
   matrix.forEach(x => {
    firstSum += x[firstCount];
    firstCount ++;
   });
   matrix.forEach(x => {
    secondsSum += x[firstCount-1];
    firstCount --;
   });
   console.log(firstSum, secondsSum);
}
diagonalSums([[20, 40],

    [10, 60]]);

diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);