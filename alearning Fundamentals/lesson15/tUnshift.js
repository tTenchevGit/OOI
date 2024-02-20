function tUnshift(arr, element) {
    arr[arr.length] = element;

     for (let i = 0; i < arr.length ; i++) {
        let temporaryV =  arr[i];
         arr[i] = arr[arr.length -1];
         arr[arr.length -1] = temporaryV;
     }
    return arr;
}

let numbers = [90, 64, 34, 25, 22, 66, 9];

let ready = tUnshift(numbers, 55556);
    console.log(ready);