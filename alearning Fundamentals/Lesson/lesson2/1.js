const time = (input) => {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());
    let seconds = num1 + num2 + num3;
    let minutes = Math.floor(seconds / 60);
    let secondsF = seconds % 60;
    let result1 = `${minutes}:${secondsF}`
    let result2 = `${minutes}:0${secondsF}`
    if (secondsF < 10) {
        console.log(result2)
    } else {
        console.log(result1)
    }
}
time(['35', '45', '44'])