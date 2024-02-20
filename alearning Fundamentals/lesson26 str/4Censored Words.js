function censored(sentace, word) {
    // const originalString = '*';
    // const repeatedString = originalString.repeat(word.length);
    while (sentace.includes(word))
        sentace = sentace.replace(word, 'x'.repeat(word.length));
    console.log(sentace);
}
censored("A small sentence with some words,",

    "small");
