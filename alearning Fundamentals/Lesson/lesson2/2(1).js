const solve = (input) => {
    const num = Number(input.shift());
    let smallBonus = 0;
    let smallBonus1 = 0;
    let bonusPoints = 0;

    if (num % 2 === 0) {
        smallBonus = 1;
    }

    if (num % 10 === 5) {
        smallBonus1 = 2;
    }

    if (num <= 100) {
        bonusPoints = 5;
    } else if (num <= 1000) {
        bonusPoints = num * 0.2;
    } else {
        bonusPoints = num * 0.1;
    }

    const totalBonus = bonusPoints + smallBonus + smallBonus1;
    const result = num + totalBonus;
    console.log(totalBonus);
    console.log(result);
}

solve(['20']);