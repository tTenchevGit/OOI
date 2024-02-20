const solve = (input) => {
    let number = Number(input.shift());
    let gender = input.shift().toLowerCase();
    if(gender === 'm'){
        if(number >= 16){
            console.log("Mr.");
        }else{
            console.log('master')
        }
    } else if(number >= 18){
        console.log('MRS.');
    }else{
        console.log('Ms.');
    }
}
solve([18, 'f'])