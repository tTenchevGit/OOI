function sort(arr) {
    let resultArray = arr;
    for(let i = 0; i < Math.floor(arr.length / 2); i++){
     resultArray[i] = arr[resultArray.length - 1 - i];
     resultArray[resultArray.length - 1 - i] = arr[i];
    }
    console.log(...resultArray)
 }
 
 sort(['abc', 'def', 'hig', 'klm', 'nop']);
 