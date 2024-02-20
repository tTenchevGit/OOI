const solve = (input) => {
    let gradus = Number(input.shift());
    let time = input.shift().toLowerCase();
    let outfit = 'none';
    let shoes = 'none';
    switch (time) {
        case 'morning':
            if (gradus >= 25) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else if (gradus <= 24 && gradus > 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (gradus <= 18 && gradus >= 10) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            }
            break;
        case 'afternoon':
            if (gradus >= 25) {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            } else if (gradus <= 24 && gradus > 18) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else if (gradus <= 18 && gradus >= 10) {
                outfit = 'Shirt ';
                shoes = 'Moccasins';
            }
            break;
        case 'evening':
            if (gradus >= 25) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (gradus <= 24 && gradus > 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (gradus <= 18 && gradus >= 10) {
                outfit = 'Shirt ';
                shoes = 'Moccasins';
            }
            break;
            default: 'home naked!!!'
    }
    console.log(` "It's ${gradus} degrees, get your ${outfit} and ${shoes}."`)
}
solve([
    8, 
    'Afternoon'
])