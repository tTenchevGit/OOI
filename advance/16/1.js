function sort(arr, condition) {
    return (condition === 'asc') ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}
console.log(sort([14, 7, 17, 6, 8], 'asc'));