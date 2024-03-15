function solve(array) {
     let resultArr = []
     for (let i = 0; i < array.length; i++) {
      let innerArr = [];
          for (let j = i ; j < array.length; j++) {
              if(array[i] === array[j]){
                  innerArr.push(array[i]);
                  if(innerArr.length > resultArr.length){
                      resultArr = innerArr;
                  }
              }else{
                  innerArr = [];
              }
          }
  
     }
     console.log(resultArr.join(' '));
  }
  solve([2, 1, 2, 2, 3, 3, 2, 2, 2]);