function solve(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            array.unshift(arr[i]);  
        } else {
            array.push(arr[i]);  
        }
    }

    for (const number of array) {
          console.log(number);
    }
}
solve([0, -5, 6]);

// const result = solve([0, -5, 6]);
// console.log(result);
