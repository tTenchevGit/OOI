const campain = (input) => {
    let data = Number(input.shift())
    let cooks = Number(input.shift())
    let cakes = Number(input.shift())
    let waffles = Number(input.shift())
    let pancakes = Number(input.shift())
    let priceC = 45 * cakes
    let priceW = 5.80 * waffles
    let priceP = 3.20 * pancakes
    let formula = (((priceC + priceW + priceP) * cooks) * data) * 7/8
    let result = formula.toFixed(2)
    console.log(result)
}
campain(['20', '8', '14', '30', '16'])