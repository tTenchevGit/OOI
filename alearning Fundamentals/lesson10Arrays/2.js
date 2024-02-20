function sort(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0; i < arr.length; i++){
        let resultArray = Number(arr[i]);
        if(resultArray % 2 === 0){
            sumEven += resultArray
        } else {
            sumOdd += resultArray
        }
    }
    let result = sumEven - sumOdd;
    console.log(result);
 }
 
 sort([3,5,7,9]);


 
