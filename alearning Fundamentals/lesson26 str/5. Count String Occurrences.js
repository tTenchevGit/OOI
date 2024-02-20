function count(sentace, word) {
    let arrWords = sentace.split(' ')
    let count = 0;
    arrWords.forEach(element => {
        if (element === word) {
            count++;
        }
    });
    console.log(count);
}
count("This is a word and it also is a sentence",

    "is")