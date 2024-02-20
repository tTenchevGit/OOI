function sorted(number) {
    const sortedArr = number.sort((a, b) => b - a);
    const firstHalf = sortedArr.slice(0, Math.ceil(sortedArr.length / 2));
    const secondHalfReverse = sortedArr.slice(sortedArr.length - Math.ceil(sortedArr.length / 2), sortedArr.length).reverse();
    const result = []

    for (let i = 0; i < firstHalf.length; i++) {
        result.push(firstHalf[i],secondHalfReverse[i]);
    }
    return result;
}
console.log(sorted([1, 21, 3, 52, 69, 63, 31,

    2, 18, 94]));