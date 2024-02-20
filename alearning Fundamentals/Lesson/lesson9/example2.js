function solve(input) {
    let recordS = Number(input.shift());
    let distanceM = Number(input.shift());
    let timeS = Number(input.shift());
    let slownest = Math.floor(distanceM / 50) * 30;
    let hisTime = timeS * distanceM + slownest;
    if(recordS > hisTime){
    let result = Math.abs(hisTime)
        console.log(` Yes! The new record is ${result.toFixed(2)} seconds.`)
    } else {
        let diff = Math.abs(recordS -  hisTime);
        let diff1 = diff.toFixed(2)

        console.log(`"No! He was ${diff1} seconds slower.`)
    }
}
solve(['10164', "1400", "25"])