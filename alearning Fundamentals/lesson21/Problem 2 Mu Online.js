function mU(stringInput) {
    let healt = 100;
    let bitcoins = 0;
    let splittedToArr = stringInput.split('|');
    for (let i = 0; i < splittedToArr.length; i++) {
        let action = splittedToArr[i].split(' ');
        if(action[0] === "potion" && (healt + Number(action[1])) > 100){
            console.log(`You healed for ${100 - healt} hp.\nCurrent health: 100 hp.`);
            healt = 100;
            
        } else if((action[0] === "potion" && (healt + Number(action[1])) <= 100)){
            healt += Number(action[1]);
            console.log(`You healed for ${Number(action[1])} hp.\nCurrent health: ${healt} hp.`);
        }else if(action[0] === "chest"){
            bitcoins += Number(action[1]);
            console.log(`You found ${Number(action[1])} bitcoins.`);
        }else{
            healt -= Number(action[1]);
            if(healt > 0 ){
                console.log(`You slayed ${action[0]}.`);
            }else{
                console.log(`You died! Killed by ${action[0]}.\nBest room: ${i+1}`);
                break;
            }
        }
    }
    if(healt > 0){
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${healt}`);
    }
}
// mU("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

mU("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");