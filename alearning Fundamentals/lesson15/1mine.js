function takeAndConvertElements(arrayOfElements) {

    let firstElement = tShift(arrayOfElements);
    let lastElement = tPop(arrayOfElements);
    let sum = firstElement + lastElement;
    return sum;
}

function tShift(arr) {
    let firstDigit = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    return Number(firstDigit);
}

function tPop(arr) {
    let lastDigit = arr[arr.length - 1];
    arr.length--;
    return Number(lastDigit);
}

console.log(takeAndConvertElements(['20', '30', '40']));

