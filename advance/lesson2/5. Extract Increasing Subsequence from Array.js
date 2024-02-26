function extractIncreasingSubsequence(input) {
    let result = []; 
    let currentBiggest = Number.MIN_SAFE_INTEGER; 

   
    for (let i = 0; i < input.length; i++) {
        if (input[i] > currentBiggest) { 
            result.push(input[i]); 
            currentBiggest = input[i]; 
        }
    }

   
    result.forEach(num => console.log(num));
}

// Example usage:
extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
