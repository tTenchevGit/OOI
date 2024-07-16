function splitArrays(arr) {
    if (arr.length < 1) {
        console.log('Array is empty.');
        return;
    }

    // First array with only the first string
    let firstArray = arr.splice(0, 1);

    // Split the first string into an array of words
    let wordsArray = firstArray[0].split(' ');

   
    let restArray = arr;

    console.log('First Array:', wordsArray);
    console.log('Rest Array:', restArray);

    
}


splitArrays(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD Steel']);
