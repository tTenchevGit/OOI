function solve(input) {
  let lostFightsCount = Number(input.shift());
  let helmetPrice = Number(input.shift());
  let swordPrice = Number(input.shift());
  let shieldPrice = Number(input.shift());
  let armorPrice = Number(input.shift());
  let expences = 0;
  let swordAndHelmetBroken = 0;
  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 === 0) {
      expences += helmetPrice;
    }
    if (i % 3 === 0) {
      expences += swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      swordAndHelmetBroken++;
      expences += shieldPrice;
    }
    if (swordAndHelmetBroken === 2) {
      expences += armorPrice;
      swordAndHelmetBroken = 0;
    }
  }
  console.log(`Gladiator Expenses: ${expences} aureus`);

}

solve([23,

  12.50,

  21.50,

  40,

  200]);
