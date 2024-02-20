function wagons(passengers1) {
    // Copy the array to avoid modifying the original
    let passengers = passengers1.slice();

    // Extract the initial number of passengers in each wagon as an array of numbers
    let numOfPassengers = passengers.shift().split(' ').map(Number);

    // Extract the maximum capacity of each wagon as a single number
    let maxCapacity = Number(passengers.shift());

    // Split each command into an array of command parts
    let commands = passengers.map(command => command.split(' '));

    // Iterate through each command
    for (let i = 0; i < commands.length; i++) {
        // Check if the command is 'Add'
        if (commands[i][0] === 'Add') {
            // Add a new wagon with the specified number of passengers
            numOfPassengers.push(Number(commands[i][1]));
        } else {
            // Handle the case when the command is a number
            let passengersToAdd = Number(commands[i][0]);

            // Iterate through existing wagons to find one that can accommodate the passengers
            for (let j = 0; j < numOfPassengers.length; j++) {
                if (numOfPassengers[j] + passengersToAdd <= maxCapacity) {
                    // Add passengers to the selected wagon and break out of the loop
                    numOfPassengers[j] += passengersToAdd;
                    break;
                }
            }
        }
    }

    // Join the array of passengers into a string separated by space
    const result = numOfPassengers.join(' ');

    // Return the final state of the train
    return result;
}

// Example usage
console.log(wagons(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));
