function findNumber(input) {
    let obj = {};
    let sorted = input.sort((a, b) => a.localeCompare(b))


    sorted.forEach(x => {
        if (!obj[x[0]]) {
            obj[x[0]] = [x]
        } else {
            obj[x[0]].push(x)
        }
    });
    let result = Object.entries(obj);
    result.forEach(x => {
        console.log(x[0]);
        x[1].forEach(item => {
            console.log(`  ${item}`);
        });
    });

}

findNumber(['Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10']);