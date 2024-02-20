function flights(flightNumber, newStatus, requirements) {
    let newInfoFlights = [];
    let noChange = [];

    for (let i = 0; i < flightNumber.length; i++) {
        let code = flightNumber[i].split(' ')[0];

        for (let j = 0; j < newStatus.length; j++) {
            let codeOfNewStatus = newStatus[j].split(' ')[0];
            if (code === codeOfNewStatus) {
                let statusFlightsObject = {};
                statusFlightsObject.destination = flightNumber[i].split(' ')[1];
                statusFlightsObject.status = newStatus[j].split(' ')[1];
                newInfoFlights.push(statusFlightsObject);
            } else {
                if (!noChange.includes(flightNumber[i]))
                    noChange.push(flightNumber[i])
            }
        }
    }

    newInfoFlights.sort((a, b) => a.destination.localeCompare(b.destination));

    
    let status = ''
    newInfoFlights.forEach(element => {
        status = element.status;
        if (requirements.includes(status)) {
            console.log(`{ Destination: '${element.destination}', Status: '${status}'}`);
            // return (` Destination: ${element.destination}, Status: ${status}`);
        }
    });

    let newNoChange = [];
    noChange.forEach(element => {
        let splitArray = element.split(' '); 
        splitArray.splice(0, 1); 
        let modifiedString = splitArray.join(' '); 
        newNoChange.push(modifiedString); 

    });

    newNoChange.forEach(x => {
        if(!requirements.includes(status)){
            console.log(`{ Destination: '${x}', Status: '${requirements}'}`)
        }
    })
        
}


flights(
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled']);

flights(['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],
    ['Ready to fly']);
