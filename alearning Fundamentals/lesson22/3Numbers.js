function numbers(input){
    let count = 0;
    let sum = 0;
    let result = [];
    let array = input.trim().split(' ');
    let arrayOfNumbers = array.map(Number)
    arrayOfNumbers.forEach(x => {
       if (Number.isFinite(Number(x))) {
           count++;
           sum += Number(x); 
       }
    });
    if(count < 5){
        console.log('No');
    }
    let averageSum = sum / count
    arrayOfNumbers.forEach(x =>{
       if(x > averageSum && count >=5){
        result.push(x)
       }
    })
    result.sort((a, b) => b - a);
    let remove = result.splice(5, result.length)
    console.log(result.join(" "))
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
