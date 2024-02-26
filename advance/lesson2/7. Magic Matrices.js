function magic(matrix) {
    let sum = [];
    
    matrix.forEach((row, i) => {
        let sumRow = 0;
        let sumColumn = 0;
        row.forEach((x, j)=>{
            sumRow += matrix[i][j]; 
            sumColumn += matrix[j][i];  
        });
        sum.push(sumRow);
        sum.push(sumColumn);
    });

    
    const allSame = sum.every(element => console.log(element === sum[0]));


}
magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);