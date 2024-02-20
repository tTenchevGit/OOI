const solve = (input) => {
    let typeF = input.shift()

    if (typeF === 'square') {
        let sideA = Number(input.shift())
        let result = sideA * sideA
        console.log(result.toFixed(3))
    } else if (typeF === 'rectangle') {
        let sideA = Number(input.shift())
        let sideB = Number(input.shift())
        let result = sideA * sideB
        console.log(result.toFixed(3))
    } else if (typeF === 'triangle') {
        let sideA = Number(input.shift())
        let sideB = Number(input.shift())
        let result = 0.5 * sideA * sideB
        console.log(result.toFixed(3))
    } else {
        let r = Number(input.shift())
        let result = Math.pow(r,2) * Math.PI
        console.log(result.toFixed(3))
    }

}
solve(['triangle', '6', '5'])