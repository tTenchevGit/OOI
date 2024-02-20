function price(input){
    let tables = Number(input.shift())
    let lengthH = Number(input.shift())
    let lengthR = Number(input.shift())
    let priceP = 7
    let priceK = 9
    let faceP = (lengthR + 0.6) * (lengthH  + 0.6)
    let kSide = lengthH / 2
    let faceK = kSide * kSide
    let completePriceUsd = ((priceP * faceP) + (priceK * faceK)) *tables
    let bgn = 1.85 * completePriceUsd
    let bgn1 = Number(bgn.toFixed(2))
    let completePriceUsd1 = Number(completePriceUsd.toFixed(2))
    let result1 = `"${completePriceUsd1} USD"`
    let result2 = `"${bgn1} BGN"`
    console.log(result1)
    console.log(result2)
}

price(['5','1.00','0.50'])