function findWordInText(word, text) {
    const lowercaseText = text.toLowerCase();
    const lowercaseWord = word.toLowerCase();
    const words = lowercaseText.split(' ');
    for (const w of words) {
        if (w === lowercaseWord) {
            console.log(word);
            return;
        }
    }
  
    console.log(`${word} not found!`);
}
findWordInText('javascript',

'JavaScript is the best programming language' )