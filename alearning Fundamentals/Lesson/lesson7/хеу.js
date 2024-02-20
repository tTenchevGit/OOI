function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combinationCount = 0;
    let isIt = false
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinationCount++;

            if (i + j === magicNumber) {
                isIt = true
                console.log(`Combination N:${combinationCount} ${i} + ${j} `);
                return;
            }
        }
    }
    if (!isIt) {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
    }

}

solve(['23', '24', '20']);
