function solve(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    let none = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 1) {
            console.log('0')
            break;
        }
        for (let j = 0; j < arr.length; j++) {
            if (j < i) {
                sumLeft += arr[j];
            } else if (j > i) {
                sumRight += arr[j];
            }
        }
        if (sumLeft === sumRight) {
            console.log(i);
            none = false;
            break;
        } else {
            sumLeft = 0;
            sumRight = 0;
        }
    }

    if (none && arr.length !== 1) {
        console.log('no');
    }
}

solve([1]);