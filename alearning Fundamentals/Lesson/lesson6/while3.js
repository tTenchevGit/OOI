const solve = (input) => {
    let neededMoney = Number(input.shift());
    let availableMoney = Number(input.shift());
    let save = 0;
    let consecutiveSpent = 0;
    let totalDays = 0;

    while (save <= neededMoney && consecutiveSpent < 5) {
        let action = input.shift();
        let money = Number(input.shift());
        totalDays++;

        if (action === "spend") {
            consecutiveSpent++;

            if (consecutiveSpent === 5) {
                console.log(`You can't save the money.`);
                console.log(totalDays);
                break;
            }

            save = availableMoney - money;
            if (save < 0) {
                save = 0;
            }
            availableMoney = save;
        } if (action === "save") {
            consecutiveSpent = 0; // Reset consecutive spent counter
            save += money;
        }
    }
    if (save >= neededMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}


// Example usage
solve(['110', '60', 'spend', '10', 'save', '10', 'spend', '10', 'spend', '10', 'spend']);
