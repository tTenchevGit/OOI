function solve(input) {
    let name = input.shift();
    let  password = input.shift();
    if (name === 'gosho') {
        let passwordT = input.shift();
        while (passwordT !== password) {
            passwordT = input.shift();
        }
        console.log(`'Welcome' ${name}`)
    } else {
        console.log('invalid username')
    }
}
solve(['gosho', "5", "4", 'sdasd', '5'])