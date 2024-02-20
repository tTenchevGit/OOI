function convertDegrees(input){
    let r = Number(input.shift())
    let p = Math.PI
    let d = r * 180 / p
    console.log(Number(d.toFixed(0)))
}
    convertDegrees(['3.1416'])