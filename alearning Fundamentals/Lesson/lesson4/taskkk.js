const solve = (input) => {
    let under200 = 0;
    let under399 = 0;
    let under599 = 0;
    let under799 = 0;
    let under1000 = 0;
    let sum = 0
    for (let i = 1; i <= 1000; i++) {

        let n = Number(input.shift());

        if (n >= 800) {
            under1000 += 1
            sum ++
        }
        if (n < 800 && n >= 600) {
            under799 += 1
            sum ++
        }
        if (n < 600 && n >= 400) {
            under599 += 1
            sum ++
        }
        if (n < 400 && n >= 200) {
            under399 += 1
            sum ++
        }
        if (n < 200) {
            under200 += 1
            sum += 1
        }
    }
    
    const caseUnder1000 = under1000 / sum * 100;
    const caseUnder799 = under799 / sum * 100;
    const caseUnder599 = under599 / sum * 100;
    const caseUnder399 = under399 / sum * 100;
    const caseUnder200 = under200 / sum * 100;

    console.log(caseUnder200);
    console.log(caseUnder399);
    console.log(caseUnder599);
    console.log(caseUnder799);
    console.log(caseUnder1000);

}
solve(['7', '800', '801', '256', '199'])