function solve(arr) {
    let k = Number(arr.shift())
    let firstArr = arr.slice(0, k).join(' ');
    let secondArr = arr.slice(arr.length - k).join(' ');
    console.log(secondArr);
    return firstArr;
}
console.log(solve([2, 7, 8, 9]));

