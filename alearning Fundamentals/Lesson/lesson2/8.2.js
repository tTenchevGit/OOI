function solve(input) {
    let income = Number(input.shift());
    let averageGrades = Number(input.shift());
    let minIncome = Number(input.shift());
    let exS = false;
    let soS = false;

    if (averageGrades >= 5.5) {
        exS = true;
    }
    soS = true;

if (averageGrades <= 4.50) {
    soS = false;
}

let sMoney = 0;
let eMoney = 0;
if (exS) {
    eMoney = Math.floor(averageGrades * 25);
}
if (soS) {
    sMoney = Math.floor(minIncome * 0.35);
}
if (sMoney > eMoney) {
    exS = false
} else if (eMoney > sMoney) {
    soS = false
}

if(exS){
    console.log(`"You get a scholarship for excellent results ${eMoney} BGN"`);
}else if (soS) {
    console.log(`"You get a Social scholarship ${sMoney} BGN"`);
} else {
    console.log("You cannot get a scholarship!")
}
}
solve(['300000000000', '3', '420.00']);
