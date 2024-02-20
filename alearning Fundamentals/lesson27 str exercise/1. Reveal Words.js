function reveal(words, sentence) {
    const wordsArr = words.split(', '); 
    for (const word of wordsArr) {
        let check = word;
        for (const element of sentence.split(' ')) {
            if (word.length === element.length) {
                
                check = '*'.repeat(word.length)
            }
            if(element === check){
                sentence = sentence.replace(element, word)
            }
        }
    }

    console.log(sentence); 
}
reveal('great, learning',

'softuni is ***** place for ******** new programming languages')