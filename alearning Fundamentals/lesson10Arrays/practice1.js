function sort(n, arr) {
    let newArr = [];
    for (let i = n - 1; i >= 0 ; i--) {
        newArr += arr[i] + ' '; // newAr[newArr.length] = arr[i]
    }
    console.log(newArr); // console.log(newArr.join(' '));
}

sort(2, [66, 43, 75, 89, 47]);
