const sum = (firstChar, secondChar) => {
    if (typeof firstChar !== 'string' || typeof secondChar !== 'string' || firstChar.length !== 1 || secondChar.length !== 1) {
        return 'Invalid';
    }
    let result = []
    const startAscii = firstChar.charCodeAt(0);
    const endAscii = secondChar.charCodeAt(0);

    for (let i = startAscii + 1; i < endAscii; i++) {
        result.push(String.fromCharCode(i));
    }
    return result.join(' ');
}
console.log(sum('ss',

'p'))