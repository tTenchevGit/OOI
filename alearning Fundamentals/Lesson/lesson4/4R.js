const solve = (input) => {
    const n = Number(input.shift());
    let oneDigit = 0;
    let evenNum = 0;
    let oddNum = 0;
    let devidedBy100 = 0;
    for (let i = 1; i <= n; i++) {
        if (i < 10 && i % 2 === 1) {
            oneDigit += 1
        } else if (i % 2 === 0) {
            evenNum += 1
        }
        if (i % 10 === 7 || i === 7) {
            oddNum += 1
        }
        if (100 % i === 0) {
            devidedBy100 += 1
        }
    }
    const oneDigitP =  (oneDigit / n) * 100;
    const evenNumP =  (evenNum / n) * 100;
    const oddNumP =  (oddNum / n) * 100;
    const devidedBy100P =  (devidedBy100 / n) * 100;
    console.log(oneDigitP.toFixed(2) + '%');
    console.log(evenNumP.toFixed(2) + '%');
    console.log(oddNumP.toFixed(2) + '%');         
    console.log(devidedBy100P.toFixed(2) + '%');
}
solve(['49']);