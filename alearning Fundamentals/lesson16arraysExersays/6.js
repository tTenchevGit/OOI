function modifyArray(arr1, arr2) {
    if (arr2.length < 2) {
        console.log("Second array should have at least two elements.");
        return arr1;
    }

    let numToMatch = arr2[0];
    let numToRemove = arr2[1];

    let index = arr1.indexOf(numToMatch);

    if (index !== -1) {
        let startIndex = index - numToRemove;
        let endIndex = (arr1.length - 1, index + numToRemove) + 1;

        arr1.splice(startIndex, endIndex - startIndex);

    } else {
        console.log("Number not found in the first array.");
    }

    let sum = 0 

    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    console.log(sum);
}

// Example usage:
let array1 = [1, 4, 4, 2, 8, 9,

    1];
let array2 = [9, 3];

modifyArray(array1, array2);
