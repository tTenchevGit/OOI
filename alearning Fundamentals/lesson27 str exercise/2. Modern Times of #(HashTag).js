function reveal(input) {
    let words = input.split(' ');
    let result = words.filter(word => word.startsWith('#') && word.length > 1);

    let filteredWords = result.filter(word => {
        return /^[a-zA-Z]+$/.test(word.substring(1));
    });

    filteredWords.forEach(word => {
        console.log(word.substring(1));
    });
}

reveal('Nowadays everyone uses # to tag #special word in #socialMedia');
