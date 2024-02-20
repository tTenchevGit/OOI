function greet(input){
    let name = input.shift()
    let age = Number(input.shift())
    let result = `You are the best mr.${name} at age of ${age} you are a millioner. That is good for you!!`
    console.log(result)
}
greet(['Piter', '19'])