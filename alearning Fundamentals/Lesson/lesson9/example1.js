function solve(input) {
    let btcCount = Number(input.shift());
    let chineseYCount = Number(input.shift());
    let commision = Number(input.shift());
    let chinaToEur = ((1.76 * 0.15) / 1.95);
    let btcToEur = 1168 / 1.95; 
    let result = ((btcCount * btcToEur) + (chineseYCount * chinaToEur)) * (1 - commision / 100) 
    console.log(result.toFixed(2));           
}
solve(['1', "5", "5"])