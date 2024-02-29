function invetory(inStock, ordered) {
    let checkInStock = inStock.slice();
    let checkInOrder = ordered.slice();
    let resultObject = {}
    for (let i = 0; i < checkInStock.length; i++) {
        let itemName = checkInStock[i];
        let itemQuantity = checkInStock[i + 1];
        if (!checkInOrder.includes(checkInStock[i]) && i % 2 === 0) {
            resultObject[itemName] = itemQuantity;
        } else if (checkInOrder.includes(checkInStock[i]) && i % 2 === 0) {

            const index1 = checkInOrder.indexOf(itemName);
            let itemQuantity2 = checkInOrder[index1 + 1];
            resultObject[itemName] = Number(itemQuantity) + Number(itemQuantity2);
            checkInOrder.splice(index1, 2);
        }
    }
    checkInOrder.map((name, index) => {
        if (index % 2 === 0) {
            let quantity = Number(checkInOrder[index + 1]);
            resultObject[name] = quantity;
        }
    });
   
    for (const key in resultObject) {
       
        console.log(`${key} -> ${resultObject[key]}`);
    }
}
invetory([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ]);