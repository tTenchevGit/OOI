function replace(input) {
    const arrayOfInput = input.split('');
    let result = [];
    arrayOfInput.forEach((element, i) => {
        
        if (element !== arrayOfInput[i + 1]) {
            result.push(element);
        }
    });
    console.log(result.join(''));
}

replace('aaaaabbbbbcdddeeeedssaa');
