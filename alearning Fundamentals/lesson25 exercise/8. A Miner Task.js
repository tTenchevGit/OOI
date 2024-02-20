function resources(array) {
    let listOfResources = {};
    let material = '';
    array.forEach((el, i) => {
        let quantity = 0;
        if (i % 2 === 0) {
            material = el;
        } else {
            quantity = Number(el);
        }
        if (!listOfResources[material]) {
            listOfResources[material] = quantity;
        } else {
            listOfResources[material] += quantity
             }
        });
    for (const key in listOfResources) {
        console.log(`${key} -> ${listOfResources[key]}`);
    }
}
resources([

    'Gold',

    '155',

    'Silver',

    '10',

    'Copper',

    '17'

]);
// resources([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ]);