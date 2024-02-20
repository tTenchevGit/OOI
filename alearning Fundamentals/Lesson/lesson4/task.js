function solve(input) {
    let n = Number(input.shift());
    let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let num = Number(input.shift());
        sum += num
        if (num > maxNum) {
            maxNum = num;
        }
        if (num < minNum) {
            minNum = num;
        }
    }
    if (maxNum === (sum - maxNum)) {
        console.log(`Yes, sum = ${maxNum}`);
    } else {
        let result = maxNum - sum;
        console.log(`No, diff ${Math.abs(result)}`);
    }
}
solve([4, 1, 2, 3, 1]);