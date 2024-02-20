function partyList(guestsOfficial) {
    const guests = guestsOfficial.slice();
    let going = [];
    for (let i = 0; i < guests.length; i++) {
        let check = guests[i].split(' ');
        let name = check[0];
        if (check[2] === 'going!') {
            if (!going.includes(name)) {
                going.push(name);
            } else {
                console.log(`${name} already on the list`);
            }

        } else if (check[2] !== 'going!') {
            if (going.includes(name)) {
                going = going.filter((guest) => guest !== name);
            }else {
                console.log(`${name} not on the list`);
            }
        }
    }


    console.log(going.join('\n'));

}
partyList(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);