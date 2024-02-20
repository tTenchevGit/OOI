function solve(input) {
    let income = Number(input.shift());
    let averageGrades = Number(input.shift());
    let minIncome = Number(input.shift());
    let socialA = Math.floor(minIncome * 0.35);
    let exA = Math.floor(averageGrades * 25);
    if (averageGrades >= 5.5 && income < minIncome){
        if (socialA > exA){
            console.log(`"You get a Social scholarship ${socialA} BGN"`);
        }else {
            console.log(`"You get a scholarship for excellent results ${exA} BGN"`);
        }
    } else if(averageGrades >= 5.5){
        console.log(`"You get a scholarship for excellent results ${exA} BGN"`);
    } else if(income < minIncome && averageGrades > 4.50){
        console.log(`"You get a Social scholarship ${socialA} BGN"`);
    } else{
        console.log("You cannot get a scholarship!")
    }
}
solve(['1550.64156', '5.959595494', '450.06156'])