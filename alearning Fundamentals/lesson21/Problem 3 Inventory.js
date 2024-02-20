function inventoryUpdate(input) {
    let inventory = input.shift().split(', ');
    for (let i = 0; i < input.length; i++) {
        let [command, ...items] = input[i].split(" - ");
        const [item1, item2] = items.length === 1 ? items[0].split(":") : items;
        if(command === 'Collect' && !inventory.includes(item1)){
            inventory.push(item1)
        }else if (command === 'Drop' && inventory.includes(item1)) {
            const indexToRemove = inventory.indexOf(item1);
            if (indexToRemove !== -1) {
                inventory.splice(indexToRemove, 1);
            }
        } else if (command === 'Combine Items' && inventory.includes(item1)) {
            const indexToRemove = inventory.indexOf(item1)+ 1;
            if (indexToRemove !== -1) {
                inventory.splice(indexToRemove, 0, item2);
            }
        } else if (command === 'Renew' && inventory.includes(item1)) {
            const indexToRemove = inventory.indexOf(item1);
            if (indexToRemove !== -1) {
                inventory.splice(indexToRemove, 1);
                inventory.push(item1);
            }
        }else if(command === 'Craft!'){
            break;
        }
    }
    console.log(inventory.join(', '));
}

// inventoryUpdate([
//     'Iron, Sword',
//     'Drop - Bronze',
//     'Combine Items - Sword:Bow',
//     'Renew - Iron',
//     'Craft!'

// ]);

inventoryUpdate([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]);
