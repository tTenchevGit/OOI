function tShift(arr) {
    let firstDigit = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    return Number(firstDigit);
}

let numbers = [90, 64, 34, 25, 22, 66, 9];

console.log(numbers);

let ready = tShift(numbers, 5);

console.log(ready);

console.log(numbers);