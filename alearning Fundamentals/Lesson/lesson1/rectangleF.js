function rF(input){
let x1 = Number(input.shift())
let y1 = Number(input.shift())
let x2 = Number(input.shift())
let y2 = Number(input.shift())
let length = Math.abs(x1 - x2)
let height = Math.abs(y1 - y2)
let area = (length * 2) + (height * 2)
let volume = length * height
console.log(volume)
console.log(area)
}

rF(['60','20','10','50'])