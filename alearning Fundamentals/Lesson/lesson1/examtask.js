function parallelepiped(input){    //make function with input
    let a = Number(input.shift())  //create 3 variables, each for a side of the paralepiped // first side
    let b = Number(input.shift())  //seconds side
    let c = Number(input.shift())  //third side
    let d = Number(input.shift())  //variable for percentage
    let volume = ((a * b * c) * 0.001) * ((100-d) * 0.01)   // We need to calculate  the the volume and then % of the iputed sand etc, and revurt the cubik meter into decemetar
    let numVolume = volume.toFixed(3)
    let result =  Number(numVolume) //toFixed is converted to a nubmer again 
    console.log(result)            //console.log how much litters of water are need for the aquarium to be full 

}  
parallelepiped(['85', '75', '47', '17'])

