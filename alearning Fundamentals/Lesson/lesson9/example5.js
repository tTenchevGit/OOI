function solve(input) {
    let volumeAll = Number(input.shift());
    let command = input.shift();
    let volumeS = 0;
    let count = 0;
    while (command !== 'end') {
        command = Number(command);
        for (let i = 1; i <= 2; i++) {
            volumeS += command;
            count++;
            if (i < 2) {
                command = Number(input.shift());
            }
        }
        volumeS += command * 1.1;
        count++;
        if (volumeAll < volumeS) {
            console.log('No more space!')
            break;
        }
        command = input.shift();
    }
if(command === 'end'){
    console.log('Congratulations! All suitcases are loaded!')
}
console.log(`Statistic: ${count} suitcases loaded.`)
}

solve(['700.5',

    '180',
    
    '340.6',
    
    '126',
    
    '220']);
