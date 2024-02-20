const solve = (input) => {
    const num = Number(input.shift());
    const bonusPoints1 = num <= 100 ? 5 : (num <= 1000 ? num * 0.2 : num * 0.1);
    const bonusPoints2 = (num % 2 === 0) ? 1 : 0;
    const bonusPoints3 = (num % 10 === 5) ? 2 : 0;
    const result = num + bonusPoints1 + bonusPoints2 + bonusPoints3;
    const bonusResult = bonusPoints1 + bonusPoints2 + bonusPoints3;
    console.log(bonusResult);
    console.log(result);
}
solve(['27052'])