function findNumber(input) {
    let storedObjects = {};
    let firstLetter = [];
    for (const line of input.split("\n")) {
        let [product, price] = line.split(" : ");
        
        storedObjects[product] = Number(price)
    }
    let sorted = Object.keys(storedObjects).sort();
    for (let key in storedObjects) {
        if (!firstLetter.includes(key.charAt(0)))
            firstLetter.push(key.charAt(0).toUpperCase());
    }
    firstLetter.sort((a, b) => a[0].localeCompare(b[0], 'en', { sensitivity: 'base' }));
    
    let result = ''
    for (const letter of firstLetter) {
        result += `${letter}\n`;
        for (const element of sorted) {
            if (element.charAt(0) === letter) {
                result += `  ${element} : ${Number(storedObjects[element])}\n`
            }
        }
    }
    console.log(result);
}

findNumber(`Appricot : 20.4
Fridge : 1500
TV : 1499
Deodorant : 10
Boiler : 300
Apple : 1.25
Anti-Bug Spray : 15
T-Shirt : 10`);