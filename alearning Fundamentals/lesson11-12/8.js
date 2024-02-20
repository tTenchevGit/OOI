function solve(arr, num) {
    let array = arr;
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ((array[i] + array[j]) === num) {
                resultArr.push(array[i]);
                resultArr.push(array[j]);
                array.shift();
                break;
            }
        }
    }
    console.log(resultArr.join(' '))
}
solve([14, 20, 60, 13, 7, 19, 8], 27);