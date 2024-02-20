function neighborhoodsResidents(arrayOfStrings) {
    let listOfNeighborhoods = arrayOfStrings.shift().split(', ');
    let obj = {};
    listOfNeighborhoods.forEach(x => {
        obj[x] = []
    });

    arrayOfStrings.forEach(element => {

        let [place, name] = element.split(' - ');
        if (listOfNeighborhoods.includes(place)) {
            if (!obj[place]) {
                obj[place] = [];
            }

            obj[place].push(name);
        }
    });

    let sortArray = Object.entries(obj).sort((a, b) => b[1].length - a[1].length)
    for (let i = 0; i < sortArray.length; i++) {
        console.log(`${sortArray[i][0]}: ${sortArray[i][1].length}`);
        if (sortArray[i][1].length > 0) {
            console.log(`--${sortArray[i][1].join('\n--')}`);
        }
    }
}

neighborhoodsResidents([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Bi1lly'
]);