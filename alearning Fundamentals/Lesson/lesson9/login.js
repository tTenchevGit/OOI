function solve(input) {
    let userName = input.shift();
    let password = userName.split('').reverse().join('');
    let trys = input.shift();
    // while (trys !== password) {
    for (let i = 1; i <= 4; i++) {
        if (password === trys) {
            console.log('yes');
            break;
        } else if (i === 4 && password !== trys) {
            console.log('too much');
            break;
        }
        if (password !== trys) {
            console.log('nope');
        } 
        trys = input.shift();
    }

}

solve(['Acer','login','go','let me in','recA']);