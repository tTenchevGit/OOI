function findNumber(array) {
    let arrayOfObjects = [];
    array.forEach(el => {
        let obj = {};
        let splitValues = el.split(' / ');
        obj.heroName = splitValues[0];
        obj.heroLevel = splitValues[1];
        obj.items = splitValues[2].split(", ").sort((a, b) => a.localeCompare(b));
        arrayOfObjects.push(obj);
        
    });
     arrayOfObjects.sort((a, b) => a.heroLevel - b.heroLevel);

      arrayOfObjects.forEach(el => {
        console.log(` Hero: ${el.heroName}\n level => ${el.heroLevel}\n items => ${el.items.join(", ")}`);
    });
}

findNumber([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);
