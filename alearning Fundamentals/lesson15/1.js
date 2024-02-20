function sumOfFirstAndLast(arrayOfElements){

    const firstElement = Number(arrayOfElements.shift());
    const lastElement = Number(arrayOfElements.pop());
    let sum = firstElement + lastElement;
    return sum;
}

const result = sumOfFirstAndLast(['20', '30', '40']);
console.log(result);