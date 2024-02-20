function smallestNumber(numbers){
    let sortedarray = numbers.sort((a, b) => a - b)//.slice(0, 2);
    return sortedarray.join(' ');
    console.log(sortedarray)
}
console.log(smallestNumber([3, 0, 10, 4, 7, 3]));