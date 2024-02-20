function solve(input) {
    for (let i = 0; i < 24; i++) {
        for (let m = 0; m <= 59; m++) {
            for (let s = 0; s <= 59; s++) {
                console.log("Hour: " + i + " Min " + m + 'sec' + s);
            }
        } 
    }
            
}
solve(['4', "5", "4", 'Stop'])