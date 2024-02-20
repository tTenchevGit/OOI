function phoneBook(arrayOfStrings) {
    let objectContacts = {};
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let [product, price] = arrayOfStrings[i].split(' ');
        if(objectContacts[product]){
            objectContacts[product] = Number(objectContacts[product]) + Number(price);
        } else {
            objectContacts[product] = price;
        }
    }
   
    for (const product in objectContacts) {
        console.log(`${product} -> ${objectContacts[product]}`);
    }
}

phoneBook(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);
