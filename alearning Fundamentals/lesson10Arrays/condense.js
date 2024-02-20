function sort(array) {
    let arr = array;
    while (arr.length > 1) {
        let variable = [];
        for (let i = 0; i < arr.length - 1; i++) {
            variable[i] = arr[i] + arr [i + 1];
        }
        arr = variable;
    }
    console.log(arr[0])
}

sort([5, 0, 4, 1, 2]);
