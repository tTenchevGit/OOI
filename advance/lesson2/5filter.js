function extractIncreasingSubsequence(input) {
   let max = Number.MIN_SAFE_INTEGER;
   input.forEach(num=>{
    if(num > max){
        console.log(num);
        max = num
    }
   })
}
extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);