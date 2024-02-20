function sort(array1, array2) {
    let size = 0;
    let resultArr = [];
    if(array1.length > array2.length){
        size = array1.length;
    }else{
        size = array2.length;
    }
    for (let i = 0; i < size; i++) {
        if(i % 2 === 0){      //((array1[i] % 2 === 0 && array2[i] % 2 === 0) || (array1[i] % 2 === 1 && array2[i] % 2 === 1)){
            resultArr[i] = (Number(array1[i]) + Number(array2[i]));
        } else{
            resultArr[i]= (array1[i] + '' + array2[i]);
        }
    }
    let result = resultArr.join('-');
    console.log(result);
 }
 
 sort(['13', '12312', '5', '77', '4'],

 ['22', '333', '5', '122', '44']);
 