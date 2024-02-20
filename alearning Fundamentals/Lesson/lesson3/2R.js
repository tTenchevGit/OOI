const cinema = (input) => {
    let type = input.shift().toLowerCase();
    let r = Math.floor(Number(input.shift()));
    let colum = Math.floor(Number(input.shift()));
    let price = 0;
    let volume = r * colum;
    switch (type){
        case "premiere" : price = volume * 12.00;
        break;
        case "normal" : price = volume * 7.50;
        break;
        case "discount" : price = volume * 5;
        break;
        default: return "none";
    }
    console.log(price.toFixed(2)+ ' leva')
}
cinema(['discount', '12', "30"])