function hero(input) {
    let resultArr = [];

    input.forEach(x => {
        let heroData = x.split(/ \/ |, /); 
     
        let result = {
            name: heroData[0],
            level: Number(heroData[1]),
            items: []
      };

        if (heroData.length > 2) {
            result.items = heroData.slice(2);
        }

        resultArr.push(result);
     });

    let json = JSON.stringify(resultArr);
    console.log(json);
}

hero(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
