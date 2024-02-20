function solve(array, rot) {
    let arr = array;
    let rotations = rot % arr.length
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr[0];

        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = firstElement;
    }
    console.log(arr.join(' '));
}
solve([2, 4, 15, 31], 5); 