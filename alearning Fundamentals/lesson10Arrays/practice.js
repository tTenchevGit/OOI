function sort(arr1, arr2) {
    let sum = 0;
    let diff = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);
        if (arr1[i] !== arr2[i]) {
            sum = 0;
            diff = i;
            break;
        } else {
            sum += arr1[i];
        }
    }

    if (sum > 0) {
        console.log(`yes ${sum}`)
    } else {
        console.log(`nope diff in ${diff}`)
    }
}

sort(['1'], ['10']);
