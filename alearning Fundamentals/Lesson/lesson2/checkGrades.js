const checkGrades = (input) => {
    let studetA = Number(input.shift())
     if(studetA >= 5.50) {
        console.log('Excellent')
     } else{
        console.log('Slab ti e farma!!')
     }   
}
checkGrades(['5.45'])