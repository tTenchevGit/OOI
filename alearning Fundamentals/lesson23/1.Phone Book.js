function phoneBook(arrayOfStrings) {
    let objectContacts = {};
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let [name, phone] = arrayOfStrings[i].split(' ');
        objectContacts[name] = phone;
    }
    let sortedContacts = Object.keys(objectContacts).sort((a, b) => objectContacts[b] - objectContacts[a]);
    for (let i = 0; i < sortedContacts.length; i++) {
        const name = sortedContacts[i];
        const phone = objectContacts[name];
        console.log(`${name} - > ${phone}`);
    }
}

phoneBook(['Tim 0834212554',
           'Peter 0877547887',
           'Bill 0896543112',
           'Tim 0876566344']);
