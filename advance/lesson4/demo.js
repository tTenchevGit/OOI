function juice(input) {
    let obj = {};
    let arrUnder = [];

    for (let el of input) {
        let [name, quantity] = el.split(' => ');
        quantity = parseFloat(quantity); 

        if (isNaN(quantity) || quantity <= 0) {
            
            continue;
        }

        if (quantity >= 1000 && !obj[name]) { 
            obj[name] = quantity;
        } else if (obj[name]) {
            obj[name] += quantity;
        } else {
            arrUnder.push([name, quantity]);
        }
    }

    for (let [name, quantity] of arrUnder) {
        obj[name] = (obj[name] || 0) + quantity;
    }

    let result = [];
    for (let key in obj) {
        let value = obj[key];
        if (value >= 1000) {
            let bottles = Math.floor(value / 1000);
            result.push(`${key} => ${bottles.toFixed()}`);
        }
    }
    return result;
}

// Updated test cases to address the issues
let testCases = [
    // Edge Cases
    { input: [], output: [] }, // Input with no fruits
    { input: ['Apple => 500'], output: [] }, // Input with only one fruit with quantity less than 1000
    { input: ['Orange => 1000'], output: ['Orange => 1'] }, // Input with only one fruit with quantity exactly 1000
    { input: ['Banana => 1500'], output: ['Banana => 1'] }, // Input with only one fruit with quantity greater than 1000
    { input: ['Grape => 500', 'Banana => 1500'], output: ['Banana => 2'] }, // Input with two fruits, one with quantity less than 1000 and one with quantity greater than 1000
    { input: ['Grape => 1000', 'Banana => 1000'], output: ['Grape => 1', 'Banana => 1'] }, // Input with two fruits, both with quantity exactly 1000
    { input: ['Apple => 500.5'], output: [] }, // Input with decimal quantity
    { input: ['Apple =>', 'Orange => 500'], output: [] }, // Input with missing quantity
    { input: ['Apple => -500', 'Orange => 500'], output: ['Orange => 1'] }, // Input with negative quantity
    { input: ['Apple => 9999999999999999', 'Orange => 500'], output: ['Apple => 9999999999999'] }, // Input with extremely large quantity exceeding JavaScript's maximum number limit
    { input: ['Long Name Fruit => 1500'], output: ['Long Name Fruit => 1'] }, // Input with long fruit name
    { input: ['Special$Fruit => 1500'], output: ['Special$Fruit => 1'] }, // Input with special characters in fruit name
    { input: ['  Apple  => 1500'], output: ['Apple => 1'] }, // Input with leading/trailing spaces in fruit name
    { input: ['Apple =>  1500  '], output: ['Apple => 1'] }, // Input with leading/trailing spaces in quantity
    { input: ['apple => 500', 'Apple => 1500'], output: ['Apple => 2'] }, // Input with duplicate names but different casing
];


for (let i = 0; i < testCases.length; i++) {
    let { input, output } = testCases[i];
    let generatedOutput = juice(input);
    let pass = JSON.stringify(generatedOutput) === JSON.stringify(output);
    console.log(`Test Case ${i + 1}: ${pass ? 'Pass' : 'Not Pass'}`);
}
