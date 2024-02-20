function tPop(arr) {
    let lastDigit = arr[arr.length - 1];
    arr.length--;
    return Number(lastDigit);
}

let numbers = [90, 64, 34, 25, 22, 66, 9];

console.log(numbers);

let ready = tPop(numbers);

   console.log(ready);

   console.log(numbers);