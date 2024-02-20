function partyList(guestsOfficial) {
    const guests = guestsOfficial.slice();
    let going = [];
    let notGoing = [];
    let list = [];
    for (let i = 0; i < guests.length; i++) {
        let check = guests[i].split(' ');
        if (check[2] === 'going!') {
            going.push(check[0]);
        } else {
            notGoing.push(check[0]);
        }   
    }
    for (let j = 0; j < notGoing.length; j++) {

        if (!going.includes(notGoing[j])){
            list.push(going[j]);
        }
        
    }
    for (let i = 0; i < guests.length; i++) {
        let check = guests[i].split(' ');
        if (check[2] === 'going!' && check[0] === list[0] ) {
            console.log(`${check[0]} is is already in the list!`)
        } else if (check[2] !== 'going!'){
            console.log(`${check[0]} is not in the list!`)
        } 
    }


     console.log(going);
   
}
partyList(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);