function solve(input){
    let combinedString = '';
   for(let i = 1; i <=3; i++){
        let str = input.shift();
        combinedString += str;
   }
   console.log(combinedString);
}
solve(['%',

'2',

'o'])