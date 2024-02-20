function travel(input){
    let objectTravel = {};
    input.forEach(element => {
        let [country, destination, price] = element.split(' > ');
        if (!objectTravel[country]) {
            objectTravel[country] = [];
        }
        let destinationExists = objectTravel[country].some(x => x[0] === destination);
        if (!destinationExists) {
            objectTravel[country].push([destination, price]);
        }else {
            let index = objectTravel[country].findIndex(x => x[0] === destination);
            if (Number(price) < objectTravel[country][index][1]) { // 
                objectTravel[country][index][1] = Number(price); 
            }
        }
    });
   
    let sortedArr = Object.entries(objectTravel) 
    sortedArr.sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedArr.forEach(([country, destinations]) => {
        destinations.sort((a, b) => a[1] - b[1]); 
        let destinationsStr = destinations.map(dest => dest.join(' -> ')).join(' ');
        console.log(`${country} -> ${destinationsStr}`);
    });
    
    
}

travel([
    "Bulgaria > Sofia > 1500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);