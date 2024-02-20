const record = (input) => {
    let timeInSeconds = Number(input.shift());
    let disanceInMeters = Number(input.shift());
    let timeSeconds1M = Number(input.shift());
    let slownes =  Math.floor(disanceInMeters/15) * 12.5;
    const timeOverAll = (timeSeconds1M * disanceInMeters) + slownes; //> 15 ? (disanceInMeters / 15) * 12.5 : disanceInMeters * (15 / 12.5);
    const timediffernce = timeInSeconds - timeOverAll;
    if(timeInSeconds < timeOverAll){
        let result = Math.abs(timediffernce);
        console.log(`"No, he failed! He was ${result.toFixed(2)} seconds slower."`)
    }else if (timeInSeconds > timeOverAll){
        let result = Math.abs(timeOverAll);
        console.log(` Yes, he succeeded! The new world record is ${result.toFixed(2)} econds."`)
    }
}
record(['55555.67', '3017', '5.03'])