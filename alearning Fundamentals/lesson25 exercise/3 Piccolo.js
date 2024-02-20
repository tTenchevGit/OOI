function piccolo(arrayOfStr) {
    let objParking = {};
    let isempty = true;
    arrayOfStr.forEach(element => {
        let [direction, carNumber] = element.split(', ');
        // if (!objParking[carNumber]) {
            objParking[carNumber] = direction
        // }
    });
    const parkingSpaceArr = Object.entries(objParking).sort((a, b) => a[0].localeCompare(b[0]));
        parkingSpaceArr.forEach(el => {
            if (el[1] === 'IN') {
                console.log(el[0])
                isempty = false;
            } 
        });
        if(isempty){
            console.log('Parking Lot is Empty');
        }
}
// piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA']);