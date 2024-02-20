const alcoholShop = (input) => {
    let priceWhiskey = Number(input.shift()); // Price of Whiskey
    let quantityBeer = Number(input.shift()); // Quantity of Beer
    let quantityWine = Number(input.shift()); // Quantity of Wine
    let quantityRakiya = Number(input.shift()); // Quantity of Rakiya
    let quantityWhiskey = Number(input.shift()); // Quantity of Whiskey

    let priceRakiya = priceWhiskey / 2; // Price of Rakiya
    let priceWine = 0.6 * priceRakiya; // Price of Wine
    let priceBeer = 0.2 * priceRakiya; // Price of Beer

    // Correcting the calculation of fullPrice
    let fullPrice = (priceBeer * quantityBeer) + (priceWine * quantityWine) + (priceRakiya * quantityRakiya) + (priceWhiskey * quantityWhiskey);

    let result = fullPrice.toFixed(2);
    console.log(Number(result));
} 

alcoholShop(['63.44', '3.57', '3.5', '6.5', '1']);
