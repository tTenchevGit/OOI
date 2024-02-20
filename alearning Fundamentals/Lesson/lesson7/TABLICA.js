function solve() {
    let stop = false
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let result = i * j;
            console.log(`${i} * ${j} = ${result}`);
            if (j === 10) {
                stop = true
                break;
            }
        }
        if (stop) {
            break;
        }
    }

}
solve()