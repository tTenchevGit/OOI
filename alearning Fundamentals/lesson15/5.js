function arrOfNumbers(numbers){
    let newArr = numbers.slice().reverse();
    let result = newArr.filter((n, i) => i % 2 !== 1).map(x => x * 2);
    return result;
}
console.log(arrOfNumbers([10, 15, 20, 25]));
