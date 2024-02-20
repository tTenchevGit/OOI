function solve(input) {
        let str = input.shift();
        while(str !== 'Stop'){
            console.log(str);
            str = input.shift();
        }
    }
    solve(['4', "5", "4", 'Stop'])