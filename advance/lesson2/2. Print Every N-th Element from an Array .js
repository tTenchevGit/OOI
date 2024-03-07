function printElement(arrStr) {
    let number = Number(arrStr.pop());
    arrStr.forEach((x, i) => {
        if (i % number === 0) {
            console.log(x);
        }
    });
}
//example
printElement(['5', '20', '31', '4', '20', '2']);
printElement(['dsa', 'asd', 'test', 'tset', '2'])
