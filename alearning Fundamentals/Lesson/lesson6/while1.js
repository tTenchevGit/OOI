const solve = (input) => {
    let favoriteBook = input.shift();
    let booksCount = Number(input.shift());
    let booksName = input.shift();
    let cheks = 0;
    while (favoriteBook !== booksName) {
        booksName = input.shift();
        cheks++;
        if (cheks === booksCount) {
            console.log('The book you search is not here!');
            console.log(`You checked ${cheks} books.`);
            break;
        }
    }
    if ((favoriteBook === booksName)) {
        console.log(`You checked ${cheks} books and found it`)
    }
}
solve(['Troy', '8', 'Stronger', 'Life Style', 'Troy'])