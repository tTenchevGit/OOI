function solve(arr) {
    let result = [];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1] || arr[j] === arr[arr.length - 1]) {
                result += arr[j] + ' ';
            }
        }
    console.log(result.trim());
}
solve([14, 24, 3, 19, 15, 17]);