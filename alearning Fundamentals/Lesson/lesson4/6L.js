const solve = (input) => {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let n = Number(input.shift());

    for (let i = start; i <= end; i++) {
        if (i % Math.pow(n, 2) === 0) {
            console.log(`"Very Special number: ${i}`);
        } else if (i % n === 0) {
            console.log(`"Special number: ${i}`);
        } else {
            console.log(i);
        }
    }
}

solve([1, 25, 3]);