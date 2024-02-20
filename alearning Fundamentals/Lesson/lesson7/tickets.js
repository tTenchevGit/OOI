function solve(input) {
    let movieName = input.shift();
    let totalSeats = Number(input.shift());
    let ticketType = input.shift();
    let student = 0;
    let standard = 0;
    let kid = 0;
    let totalTickets = 0;

    while (movieName !== "Finnish") {
        let soldTickets = 0;

        while (ticketType !== "END") {
            if (ticketType === 'student') {
                student += 1;
            } else if (ticketType === 'standard') {
                standard += 1;
            } else {
                kid += 1;
            }

            soldTickets += 1;
            totalTickets += 1;

            if (soldTickets >= totalSeats) {
                break;
            }

            ticketType = input.shift();
        }

        let percentageFilled = (soldTickets / totalSeats) * 100;
        console.log(`${movieName} - ${percentageFilled.toFixed(2)}% full.`);

        if (totalTickets >= totalSeats) {
            break;
        }

        movieName = input.shift();
        if (movieName !== "Finnish") {
            totalSeats = Number(input.shift());
            ticketType = input.shift();
        }
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

solve(['Taxi', '10', 'standard', 'kid', 'student', 'student', 'standard', 'standard', 'END', 'Scary Movie', '6', 'student', 'student', 'student', 'student', 'student', 'student', 'Finnish']);
