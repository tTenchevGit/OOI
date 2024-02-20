const convertor = (input) => {
    const num = Number(input.shift());
    const unit1 = input.shift();
    const unit2 = input.shift();
    if (unit1 === 'm' && unit2 === 'mm') {;
        console.log((num / 1000).toFixed(3))
    } else if (unit1 === 'm' && unit2 === 'sm') {
        console.log((num * 1000).toFixed(3));
    } else if (unit1 === 'sm' && unit2 === 'm') {
        console.log((num / 100).toFixed(3));
    } else if (unit1 === 'sm' && unit2 === 'mm') {
        console.log((num * 10).toFixed(3));
    } else if (unit1 === 'mm' && unit2 === 'm') {
        console.log((num * 1000).toFixed(3));
    } else { unit1 === 'mm' && unit2 === 'sm'
        console.log((num * 100).toFixed(3));
    }
}
convertor(['12', 'mm', 'm'])