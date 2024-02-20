function party(names) {
    let name = names.shift();
    let objectGuests = {};
    while (name !== 'PARTY') {
        if (!name.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57) {
            objectGuests[name] = 'VIP';
        } else {
            objectGuests[name] = 'regular';
        }
        name = names.shift();
    }
    let vip = [];
    let regular = [];
    let count = 0;
    for (const key in objectGuests) {
        if (!names.includes(key) && objectGuests[key] === 'VIP') {
            vip.push(key);
            count++;
        } else if(!names.includes(key) && objectGuests[key] === 'regular'){
            regular.push(key);
            count++;
        }
    }
    console.log(count);
    const result= vip.concat(regular)
    // console.log(count);
    console.log(`${result.join('\n')}`);
    
}
party(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);
