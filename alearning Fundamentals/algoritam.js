function travel(input) {
    let objectTravel = {};
    input.forEach(element => {
        let [country, destination, price] = element.split(' > ');
        if (!objectTravel[country]) {
            objectTravel[country] = [];
        }
        let destinationExists = objectTravel[country].some(x => x[0] === destination);
        if (!destinationExists) {
            objectTravel[country].push([destination, +price]); // Convert price to number
        } else {
            let index = objectTravel[country].findIndex(x => x[0] === destination);
            if (+price < objectTravel[country][index][1]) { // Convert price to number
                objectTravel[country][index][1] = +price; // Convert price to number
            }
        }
    });

    let sortedArr = Object.entries(objectTravel).sort((a, b) => {
        // First, sort by country name
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        // If countries are the same, sort by the lowest price
        return a[1][0][1] - b[1][0][1];
    });

    sortedArr.forEach(([country, destinations]) => {
        let lowestPrice = destinations.reduce((min, [, price]) => Math.min(min, price), Infinity);
        console.log(`${country} -> ${lowestPrice}`);
    });
    console.log();
}

travel([
    "Bulgaria > Sofia > 1500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
