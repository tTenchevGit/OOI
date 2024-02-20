const solve = [7, 8, 9, 7, 2, 3,

    4, 1, 2];
const num = solve.filter((n, i, arr) => arr.indexOf(n) === i);
console.log(num.join(' '));