function math(input){
    let num = 10.5674
    let numToFixed = num.toFixed(2)
        let result = Number(numToFixed) + 2
    console.log(result) // toFixed. it rounds the variable up until the number withng the brakents, however it rounds up or down if there is anotehr number after that
}
math()