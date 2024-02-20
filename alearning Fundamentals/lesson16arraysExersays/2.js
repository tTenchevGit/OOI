function repeat(input) {
    let copy = input.slice();
    let result = [];

        for (let j = 0; j < copy.length ; j++) {
            if (!result.includes(copy[j])){
                result.push(copy[j]);
            }
    }

   
    return result.join(' ');
}

console.log(repeat([7, 8, 9, 7, 2, 3, 4, 1, 2]));
