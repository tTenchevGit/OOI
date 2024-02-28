function townsData(array) {
    let result = [];
    let obj = {};
    let clearData = array.map(property => property.split('|').filter(item => item !== '').map(item => item.trim()));
    let prop = clearData.shift();
   
    clearData.forEach(data => {
        const latitude = Number(data[1]).toFixed(2);
        const longitude = Number(data[2]).toFixed(2);
        if (!prop[0][data[0]]) {
            obj = {
                [prop[0]]: data[0],
                [prop[1]]: Number(latitude),
                [prop[2]]: Number(longitude),
            };
        }
        
        result.push(obj);
    });  

    let json = JSON.stringify(result);
    console.log(json);
}

townsData(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |']);