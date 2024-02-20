const sum = (firstChar, secondChar) => {
    let result = ''
    const startAscii = firstChar.charCodeAt(0);
    const endAscii = secondChar.charCodeAt(0);

    for (let i = startAscii + 1; i < endAscii; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    return result;
}
console.log(sum('a',

'd'))