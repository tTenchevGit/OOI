function gladiatorInventory(inventory) {
    let action = inventory.splice(1);
    let index = 0
    for (let i = 0; i < action.length; i++) {

        if (inventory.includes(action[i][1])) {
            switch (action[i][0]) {
                case Trash:
                    index = inventory.indexOf(action[i][1]);
                    inventory.splice(index, 1);
                    break;
                case Repair:
                    index = inventory.indexOf(action[i][1]);
                    inventory.splice(index, 1);
                    inventory.push(action[i][1]);
                    break;
                case Upgrade:
                    index = inventory.indexOf(action[i][1]);
                    inventory.splice(index + 1, 0, action[i][1]);
                    break;
                default:
                    break;
            }
        }else if(!inventory.includes(action[i][1]) && action[i][0] === 'Buy'){
            inventory.push(action[i][1]);
        }
    }
    console.log(inventory);
 }
gladiatorInventory(['SWORD Shield Spear',

    'Buy Bag',

    'Trash Shield',

    'Repair Spear',

    'Upgrade SWORD-Steel'])