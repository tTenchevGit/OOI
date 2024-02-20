function sort(arr) {
   let resultArray = arr;
   for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
            let t = resultArray[j];
            resultArray[j] = resultArray[j + 1];
            resultArray[j + 1] = t;
         }
      }
   }
   console.log(arr);
}

sort([90, 64, 34, 25, 22, 66, 9]);
