function sumStrings(a, b) {

    const sum = BigInt(a) + BigInt(b);
    const sumString = sum.toString();
    console.log(sumString);
    const resultArray = sumString.split('').map(Number).join('');

    console.log(resultArray);
}

sumStrings('123', '456')