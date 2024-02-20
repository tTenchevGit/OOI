function solve(input) {
    let command = input.shift();
    let prime = 0;
    let notPrime = 0;

    while (command !== 'stop') {
        command = Number(command);
        let isPrime = true;

        if (command < 0) {
            console.log(`${command} is negative.`);
            isPrime = false;
        } else if (command === 1) {
            isPrime = true;
        } else {
            for (let i = 2; i <= Math.sqrt(command); i++) {
                if (command % i === 0) {
                    isPrime = false;
                    notPrime += command;
                    break;
                }
            }
        }

        if (isPrime) {
            prime += command;
        }

        command = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non-prime numbers is: ${notPrime}`);
}

// Example usage:
solve([30, 83, 33, -1, 20, 'stop']);
