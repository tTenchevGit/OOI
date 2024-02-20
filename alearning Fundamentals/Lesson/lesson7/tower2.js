function solve(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());
    let large = Number.MIN_VALUE;
    let isBiggest = false;
    for (let i = floors; i > 0; i--) {
        let result = '';
        if (large > i) {
            large = floors;
        } else if (large = floors) {
            isBiggest = true;
        }
        for (let j = 0; j < rooms; j++) {
            if (isBiggest) {
                result += `L${i}${j} `
            } else if (i % 2 === 0 && isBiggest !== true) {
                result += `O${i}${j} `
            } else if (i % 2 === 1 && isBiggest !== true) {
                result += `A${i}${j} `
            }
        }
        isBiggest = false;
        console.log(result)
    }

}

solve(['9', '5'])