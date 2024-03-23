function nfs(input) {
    const objCars = {};
    const number = input.shift();
    let count = 0
    while (count < number) {
        let line = input.shift()
        let [car, milage, liters] = line.split('|');
        objCars[car] = [Number(milage), Number(liters)];
        count++
    }
    const arrOfCars = Object.entries(objCars);
  
    while (input.length > 0 && input !== "Stop") {
        let action = input.shift()
        let [command, car, distance, fuelRequared] = action.split(' : ')
        fuelRequared = parseInt(fuelRequared, 10);

   
        for (const carDetails of arrOfCars) {
            let model = carDetails[0];
          

            if (carDetails[0] === car) {
                switch (command) {
                    case 'Drive':
                        [carDetails[1][0], carDetails[1][1]] = drive(car, distance, fuelRequared, carDetails[1][0], carDetails[1][1], carDetails[0]);

                        if (carDetails[1][0] > 100000) {
                            const carIndex = arrOfCars.findIndex(([name, details]) => name === car);
                            if (carIndex !== -1) {
                                arrOfCars.splice(carIndex, 1);
                                console.log(`Time to sell the ${model}!`);
                            }
                        }
                        
                        break;
                    case 'Refuel':
                        [carDetails[1][0], carDetails[1][1]] = refuel(car, distance, fuelRequared, carDetails[1][0], carDetails[1][1], carDetails[0]);

                        break;
                    case 'Revert':
                        [carDetails[1][0], carDetails[1][1]] = revert(car, distance, fuelRequared, carDetails[1][0], carDetails[1][1], carDetails[0]);

                        break;

                    default:
                        break;
                }
            }
        }

    }

    function drive(car, distance, fuelRequared, milage, fuelExistin) {
        if (fuelExistin > fuelRequared) {
            fuelExistin -= fuelRequared;
            milage += Number(distance);
            console.log(`${car} driven for ${distance} kilometers. ${fuelRequared} liters of fuel consumed.`);
        } else {
            console.log('Not enough fuel to make that ride');
        }
        return [milage, fuelExistin];
    }


    function refuel(car, distance, fuelRequared, milage, fuelExistin, model) {
        let diff = 0
        if ((fuelExistin + Number(distance)) > 75) {
            diff = 75 - Number(fuelExistin);
            console.log(`${car} refueled with ${diff} liters`);
            fuelExistin = 75;
        } else {

            diff = Number(distance);
            console.log(`${car} refueled with ${diff} liters`);
            fuelExistin += Number(distance);
        }
        return [milage, fuelExistin];
    }
    

    function revert(car, distance, fuelRequared, milage, fuelExistin, model) {
       milage -= distance;
       if(milage < 10000){
        milage = 10000
       } else{
        console.log(`${car} mileage decreased by ${distance} kilometers`);
       }
        return [milage, fuelExistin];
    }

    arrOfCars.forEach(element=>{
     
        console.log(`${element[0]} -> Mileage: ${element[1][0]} kms, Fuel in the tank: ${element[1][1]} lt.`);
    });

}
nfs([
    '3',
    'Audi A6| 38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])



nfs([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])