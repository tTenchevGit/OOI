function gladiatorInventory(input) {
    let action = input.splice(1);
    let inventory = input[0].split(' ');
    let index = 0;
    for (let i = 0; i < action.length; i++) {
        let [command, item, upgrade] = action[i].split(' ');

        if (inventory.includes(item)) {
            switch (command) {
                case 'Trash':
                    index = inventory.indexOf(item);
                    inventory.splice(index, 1);
                    break;
                case 'Repair':
                    index = inventory.indexOf(item);
                    inventory.splice(index, 1);
                    inventory.push(item);
                    break;
                case 'Upgrade':
                    index = inventory.indexOf(item);
                    inventory.splice(index + 1, 0, `${item}:${upgrade}`);
                    break;
                default:
                    break;
            }
        } else if (!inventory.includes(item) && command === 'Buy') {
            inventory.push(item);
        }
    }
    return inventory.join(' ');
}

console.log(gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']));
