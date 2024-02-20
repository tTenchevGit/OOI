function findNumber(input) {
    let productsByLetter = {};

    // Parse the input and group products by their first letter
    for (const line of input.split("\n")) {
        let [product, price] = line.split(" : ");
        let firstLetter = product.trim()[0].toUpperCase();
        if (!productsByLetter.hasOwnProperty(firstLetter)) {
            productsByLetter[firstLetter] = [];
        }
        productsByLetter[firstLetter].push({ product: product, price: Number(price) });
    }

    // Sort the keys of the productsByLetter object alphabetically
    let sortedLetters = Object.keys(productsByLetter).sort();

    // Format the output
    let output = '';
    for (const letter of sortedLetters) {
        output += `${letter}\n`;
        for (const { product, price } of productsByLetter[letter]) {
            output += `  ${product}: ${price}\n`;
        }
    }

    // Print the formatted output
    console.log(output);
}

// Example usage:
findNumber(`Appricot : 20.4
Fridge : 1500
TV : 1499
Deodorant : 10
Boiler : 300
Apple : 1.25
Anti-Bug Spray : 15
T-Shirt : 10`);
