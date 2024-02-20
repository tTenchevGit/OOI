const  dancerNum = (input) => { // main fucntion that calcultes how many dancers can be in the gym
    let l = Number(input.shift())//input variables for l - for leight
    let w = Number(input.shift())// varubke w- for width
    let a = Number(input.shift()) //  a for the side of the wardrobe
    let faceOfWordrobe = a * a //variable for the face of the gym
    let faceOfGym = l * w   //variable for the face of the gym
    let faceOfBench = faceOfGym / 10   // variable for the size of the bench which is face of the guym/10 
    let clearSpace = faceOfGym - (faceOfWordrobe + faceOfBench)  // variable for the clear speace- gym face minus - wardobe and bench
    let danceSpace = (40 + 7000) / 100  //variableone dance need 0.4 sqMeters + 70 sqM
    let result = Math.floor(clearSpace / danceSpace) // variable that calculates how much free space it has( gym space / requared free space for dacnce
    console.log(result)
}
dancerNum(['50', '25', '2']) // arguments