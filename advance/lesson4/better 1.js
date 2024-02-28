function hero(input) {
    let resultArr = [];

    input.forEach(x => {
        let [name, level, items] = x.split(' / '); 
        items = items ? items.split(', '): []
        let obj = {
            name: name,
            level: Number([level]),
            items: items
        }

        resultArr.push(obj);
     });

    let json = JSON.stringify(resultArr);
    console.log(json);
}

hero(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
