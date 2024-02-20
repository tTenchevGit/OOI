function splitArrays(arr) {
    if (arr.length < 1) {
        console.log('Array is empty.');
        return;
    }

    // First array with only the first string
    let firstArray = arr.splice(0, 1);

    // Split the first string into an array of words
    let wordsArray = firstArray[0].split(' ');

    // Second array with the rest of the strings
    let restArray = arr;

    console.log('First Array:', wordsArray);
    console.log('Rest Array:', restArray);

    // You can return the arrays if needed
    // return [wordsArray, restArray];
}

// Example usage
splitArrays(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD Steel']);
