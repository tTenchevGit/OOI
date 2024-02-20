function textAndNumber(input){
    let fName = input.shift()
    let lName = input.shift()
    let age = Number(input.shift())
    let town = input.shift()
    let greeting = `You are ${fName} ${lName}, a ${age}-years old person from ${town}.`
    console.log(greeting)  
}
textAndNumber(['John', 'Smith', '36', 'Plovdiv'])