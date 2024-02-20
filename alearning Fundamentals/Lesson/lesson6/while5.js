const solve = (input) => {
    let change = Number(input.shift());
    let current = Math.round(change * 100);
    let coins = 0;
    while (current > 0) {
        if (current % 200 === 0) {
            current -= 200;
            coins++;
        } else if (current - 200 > 0) {
            current -= 200;
            coins++;
        } else if (current % 100 === 0) {
            current -= 100;
            coins++;
        } else if (current - 100 > 0) {
            current -= 100;
            coins++;
        } else if (current % 50 === 0) {
            current -= 50;
            coins++;
        } else if (current - 50 > 0) {
            current -= 50;
            coins++;
        } else if (current % 20 === 0) {
            current -= 20;
            coins++;
        } else if (current - 20 > 0) {
            current -= 20;
            coins++;
        } else if (current % 10 === 0) {
            current -= 10;
            coins++;
        } else if (current - 10 > 0) {
            current -= 10;
            coins++;
        } else if (current % 5 === 0) {
            current -= 5;
            coins++;
        } else if (current - 5 > 0) {
            current -= 5;
            coins++;
        } else if (current % 2 === 0) {
            current -= 2;
            coins++;
        } else if (current - 2 > 0) {
            current -= 2;
            coins++;
        } else if (current % 1 === 0) {
            current -= 1;
            coins++;
        } else if (current - 1 > 0) {
            current -= 1;
            coins++;
        }
    }
    console.log(coins);
}
solve(["0.56"])