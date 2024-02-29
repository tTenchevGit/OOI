function juice(input) {
    let obj = {};
    let arrUnder = []
    input.forEach(el => {
        let [name, quantity] = el.split(' => ');
        quantity = parseFloat(quantity);

        if (quantity >= 1000 && !obj[name]) {
            obj[name] = quantity
        } else if (obj[name]) {
            obj[name] = Number(obj[name]) + Number(quantity);
        } else if(quantity >= 0){
            arrUnder.push([name, quantity])
        }
    });

    arrUnder.forEach(([name, quantity]) => {
        obj[name] = Math.floor(Number(obj[name])|| 0) + Number(quantity);
    });

    for (const key in obj) {
        let value = Number(obj[key])
        if (value >= 1000) {
            let bottles = Math.floor(value / 1000)
            console.log(`${key} => ${bottles.toFixed()}`);
        }
    }
}
juice(['Grape => 500', 'Banana => 1500']);