function solve(input){
    let distanceInMeters = Number(input.shift());
    let distanceInKilometers = distanceInMeters / 1000;
    console.log(distanceInKilometers.toFixed(2))
}
solve([798])