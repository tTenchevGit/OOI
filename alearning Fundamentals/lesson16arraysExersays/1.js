function wagons(input) {
    let copy = input.slice()
    let numOfPassengers = copy[0].split(' ').map(Number);
    let maxCapacity = Number(copy[1]);
    let commands = copy.slice(2);

    for (let i = 0; i < commands.length; i++) {
        let comMax = commands[i].split(' ');

        if (comMax.length === 2) {
            numOfPassengers.push(Number(comMax[1]));
        } else {
            let passengersToAdd = Number(comMax[0]);
            for (let j = 0; j < numOfPassengers.length; j++) {
                if (numOfPassengers[j] + passengersToAdd <= maxCapacity) {
                    numOfPassengers[j] += passengersToAdd;
                    break;
                }
            }
        }
    }

    const result = numOfPassengers.join(' ');
    return result;
}

console.log(wagons(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'9'] ));
