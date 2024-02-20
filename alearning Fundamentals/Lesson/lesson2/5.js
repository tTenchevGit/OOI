const convertTime = (input) => {
    let hours = Number(input.shift());
    let minutes = Number(input.shift());
    let timeInMinutes = hours * 60 + minutes;
    let timePlus15 = timeInMinutes + 15;
    let finalHours = Math.floor(timePlus15 / 60);
    let finalMinutes = timePlus15 % 60;
    if(finalHours >= 24){
        finalHours = finalHours - 24;
    }
    if(hours < 24 && hours >= 0 && minutes < 59 && minutes >= 0 && (minutes + 15) <= 59 ){
        if(minutes < 10){
            console.log(`${hours}:0${minutes + 15}`)
        } else{
            console.log(`${hours}:${minutes + 15}`)
        }
    } else if(finalMinutes < 10){
        console.log(`${finalHours}:0${finalMinutes}`)
    } else{
        console.log(`${finalHours}:${finalMinutes}`)
    }
    
}
convertTime(['22','44'])