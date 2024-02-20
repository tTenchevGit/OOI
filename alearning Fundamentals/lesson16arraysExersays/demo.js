const solve = [90, 64, 90, 25, 22, 25, 9];
const num = solve.filter((n, i, arr) => arr[i] === n ? arr.splice(i, 1) : n);
console.log(num);
