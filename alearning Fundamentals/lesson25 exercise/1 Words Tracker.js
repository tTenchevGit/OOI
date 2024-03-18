function solve(input) {
    let arrayOfWords = input.shift().split(' ');
    let obj = {};
    arrayOfWords.forEach(el => {
        let count = 0;
        input.forEach(x => {
            if (el === x) {
                count++
            }
        });
        obj[el] = count;
    });
    let sortArray = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (const element of sortArray) {
        console.log(`${element[0]} - ${element[1]}`);
    }
}
solve([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have', 'to'

    , 'count', 'the', 'occurances', 'of', 'the'

    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])