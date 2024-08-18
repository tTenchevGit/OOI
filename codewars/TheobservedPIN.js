function getPINs(observed) {
  
    let keypad = [
       ['1', '2', '3'],
       ['4', '5', '6'],
       ['7', '8', '9'],
       [ '', '0', '']
   ];
     
     let positionMap = {};
     
     for(let row = 0; row <keypad.length; row++){
       for(let col = 0; col < keypad[row].length; col++){
          let digit = keypad[row][col];
          if(digit!==''){
            positionMap[digit] = [digit]
            
              if (row > 0 && keypad[row - 1][col] !== '') positionMap[digit].push(keypad[row - 1][col]);
              if (row < keypad.length - 1 && keypad[row + 1][col] !== '') positionMap[digit].push(keypad[row + 1][col]);
              if (col > 0 && keypad[row][col - 1] !== '') positionMap[digit].push(keypad[row][col - 1]);
              if (col < keypad[row].length - 1 && keypad[row][col + 1] !== '') positionMap[digit].push(keypad[row][col + 1]);
          }
       }
    
     }
    
       
      function generateCombinations(possibleDigits, prefix = '', index = 0) {
           if (index === possibleDigits.length) return [prefix];
           
           let combinations = [];
           for (let digit of possibleDigits[index]) {
               combinations = combinations.concat(generateCombinations(possibleDigits, prefix + digit, index + 1));
           }
           
           return combinations;
       }
   
     let possibleDigits = observed.split('').map(digit => positionMap[digit]);
   
    console.log(possibleDigits);
     
     
       return generateCombinations(possibleDigits);
     
   }


getPINs("12");