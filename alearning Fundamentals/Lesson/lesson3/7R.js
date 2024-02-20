const solve = (input) => {
    const month = input.shift();
    const nights = Number(input.shift());
    priceS = 0;
    priceA = 0;
    if((nights < 7 && nights < 13) && (month === 'May' || month ==='October')){
        priceS = (50 * 0.95) * nights 
        priceA = 65 * nights
    } else if(nights > 14  && (month === 'May' || month ==='October')){
        priceS = (50 * 0.7) * nights
        priceA = (65 * 0.9) *nights
    } else if (nights > 14  && (month === 'June' || month ==='September')){
        priceS = (72.20 * 0.8) * nights
        priceA = (68.70 * 0.9) * nights
    }else if(nights > 14  && (month === 'July' || month ==='August')){
        priceS = 76 * nights
        priceA = (77 * 0.9) * nights
    }else if (nights <= 14  && (month === 'June' || month ==='September')){
        priceS = 75.20 * nights
        priceA = 68.70 * nights
    }else{
        priceS = 76 * nights
        priceA = 77 * nights
    }

    console.log(`"Apartment: ${priceA.toFixed(2)} lv."`)
    console.log(` "Studio: ${ priceS.toFixed(2)} lv."`)
}
solve(["August", "5"])