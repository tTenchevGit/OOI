function cardGame(input) {
    let obj = {};
    input.forEach(element => {
        let [name, cards] = element.split(': ');
        if (!name.includes(':')) {
            if (!obj[name]) {
                obj[name] = cards.split(',').map(x => x.trim());
            } else {
                obj[name] = obj[name].concat(cards.split(',').map(x => x.trim()));
            }
        }
    });

    Object.entries(obj).forEach(([name, cards]) => {
        obj[name] = [...new Set(cards)];
    });
    
    Object.entries(obj).forEach(([name, cards]) => {
        let sum =0
        cards.forEach(card => {
            sum += calculateTypes(card) * calculateNumbers(card);
        });
        console.log(`${name}: ${sum} `);
    });
    

    function calculateTypes(card) {
        let type = card.slice(-1);
        switch (type) {
            case 'C':
                return 1;
            case 'D':
                return 2;
            case 'H':
                return 3;
            case 'S':
                return 4;
            default:
                return 0;
        }
    }

    function calculateNumbers(card) {
        let number = card.slice(0, -1); 
        switch (number) {
            case '2':
                return 2;
            case '3':
                return 3;
            case '4':
                return 4;
            case '5':
                return 5;
            case '6':
                return 6;
            case '7':
                return 7;
            case '8':
                return 8;
            case '9':
                return 9;
            case '10':
                return 10;
            case 'J':
                return 11;
            case 'Q':
                return 12;
            case 'K':
                return 13;
            case 'A':
                return 14;
            default:
                return 0;
        }
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
