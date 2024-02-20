const solve = (input) => {
    let product = input.shift();
    if(product === 'b' || product === 'l' || product === 'a' || product === 'k' || product === 'c' || product === 'g'){
        console.log('fruit');
    } else if(product === 't' || product === 'cu' || product === 'p' || product === 'car'){
        console.log('veg')
    } else{
        console.log('no')
    }
}
solve([
    "dadas"
])