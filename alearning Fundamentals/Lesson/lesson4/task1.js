const solve = (input) => {
    let n = Number(input.shift());
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num % 2 === 1) {
            oddSum += num;
            if (oddMin > num) {
                oddMin = num;
            }
            if (oddMax < num) {
                oddMax = num;
            }
        } else  if (num % 2 === 0){
            evenSum += num;
            if (evenMin > num) {
                evenMin = num;
            }
            if (evenMax < num) {
                evenMax = num;
            }
        }
    }
  //  for (let i = 0; i < n; i++) {
       // let num = Number(input.shift());
       // if (num % 2 === 1) {
      //      oddSum += num;
      //  } else if(num % 2 === 0){
      //      evenSum += num;
//}
       // if (num % 2 === 1 && oddMin > num) {
     //       oddMin = num;
      //  } else if (num % 2 === 1 && oddMax < num) {
     //       oddMax = num;
     //   } 
     //   if (num % 2 === 0 &&  evenMin > num) {
     //       evenMin = num;
   //     } else if (num % 2 === 0 && evenMax < num) {
   //         evenMax = num;
   //     }
   // }
    console.log('oddSum = ' + oddSum.toFixed(2))
    if(oddMin != Number.MAX_SAFE_INTEGER){
        console.log('oddMin = ' + oddMin.toFixed(2))
    }else{
        console.log('oddMin = NO')
    }
    if(oddMax != Number.MIN_SAFE_INTEGER){
        console.log('oddMax = ' + oddMax.toFixed(2))
    }else{
        console.log('oddMax = NO')
    }

    console.log('evenSum = ' + evenSum.toFixed(2))

    if(evenMin != Number.MAX_SAFE_INTEGER){
        console.log('evenMin = ' + evenMin.toFixed(2))
    }else{
        console.log('evenMin = NO')
    }
    if(evenMax != Number.MIN_SAFE_INTEGER){
        console.log('evenMax = ' + evenMax.toFixed(2))
    }else{
        console.log('evenMax = NO')
    }
}
solve([2, 1.5, -2])