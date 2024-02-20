function solve(input) {
    let name = input.shift();
    while(name !== 'end'){
        let budget = Number(input.shift());
        let saved = 0;
        while(budget > saved){
            let income = Number(input.shift());
            saved += income;
        }
        console.log(`Going to ${name}!`);
        name = input.shift();
    }
}

solve(['Greece', '1000', '200', '200', '200', '100', '150', '240', 'Spain', '1200', '300', '500', '193', '423', 'end']);
