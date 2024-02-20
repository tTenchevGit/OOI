function solve(input) {
    let name = input.shift();
    let count = 1;
    let sum = 0;
    let years = 12;
    while (count <= years) {
        let grades = Number(input.shift());
        if (grades >= 4) {
            count++;
            sum += grades;
        }
    }
    let average = sum / years;
    console.log(`${name} graduated. Average grade ${average.toFixed(2)}`)

}
solve(['John', "4", "5", "4", "4", "5", "4", "4", "5", "4", "4", "5", "4"])