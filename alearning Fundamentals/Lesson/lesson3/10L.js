const vacation = (input) =>{
    let type = input.shift();
    let days = Number(input.shift());
    let grade = input.shift();
    let price = 0;
    if(type === 'pApartment'){
        if(days < 10){
            price = (days - 1) * (35 * 0.9);
        } else if(days >= 10 && days <= 15){
            price = (days - 1) * (35 * 0.85);
        }else{
            price = (days - 1) * (35 * 0.8);
        }
        
    }else if(type === 'apartment'){
        if(days < 10){
            price = (days - 1) * (25 * 0.7);
        } else if(days >= 10 && days <= 15){
            price = (days - 1) * (25 * 0.65);
        }else{
            price = (days - 1) * (25 * 0.5);
        } 
    } else {
        price = (days - 1) * 18;
    }
    if(grade === 'positive'){
        console.log((price * 1.25).toFixed(2))
    }else{
        console.log((price * 0.9).toFixed(2))
    }
    
    
}
vacation(["apartment", '14', 'positive'])