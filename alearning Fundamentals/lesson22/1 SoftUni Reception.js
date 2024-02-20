function questions(input){
    const firstEmploy = Number(input.shift());
    const secondeEmploy = Number(input.shift());
    const thirdEmploy = Number(input.shift());
    const students = Number(input.shift());
    const productivityPerHour = firstEmploy + secondeEmploy + thirdEmploy;
    const hoursNoBrakes = Math.ceil(students / productivityPerHour);
    let result = hoursNoBrakes;
    if(hoursNoBrakes > 3){
        let brakes = hoursNoBrakes / 3;
        result += brakes ;
    }
    console.log(`Time needed: ${Math.floor(result)}h.`)
}
questions(['0','1','0','20'])