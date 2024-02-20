function solve(input) {
    let days = Number(input.shift());
    let command = input.shift();
    let countwins = 0;
    let countloses = 0;
    let moneyAll = 0;
    let winDays =0;
    for (let i = 1; i <= days; i++) {
        let money = 0;
        while (command !== 'Finish') {
            if (command === 'win') {
                countwins++;
                money += 20;
            } else if (command === 'lose') {
                countloses++;
            }
            command = input.shift();
        }
        if(countwins > countloses){
            money *= 1.1;
            winDays++
        }else{
            winDays--;
        }
        moneyAll += money;
        command = input.shift();
    }
    if(winDays > 0){
        moneyAll *= 1.2;
    }
    if(countwins > countloses){
        console.log(`You win! ${moneyAll.toFixed(2)}`)
    }else {
        console.log(`lose! ${moneyAll.toFixed(2)}`)
    }

}
solve(['2', 'win', 'win', 'Finish', 'win', 'win', 'Finish'])
    
  