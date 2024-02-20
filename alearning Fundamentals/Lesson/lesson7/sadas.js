User
function solve(input) {
    let name = input.shift();
    let place = Number(input.shift());
    let standart = input.shift();
    let student = 0;
    let standard = 0;
    let kid = 0;
    let countOver = 0;
    while( name !== "Finnish"){
        let count = 0 
        if(place <= 0 ){
            break;
        }
        while(standart !== "END"){
            if(standart === 'student'){
                student += 1;
                count ++;
                countOver++
            } else if(standard === 'standard'){
                standard += 1 ;
                count ++;
                countOver++
            } else{
                count ++;
                kid += 1;
                countOver++
            }

        }
        place--
        console.log(`${name} - ${(count * 100) / place} `)
    }
    console.log(countOver);
    console.log((student * 100) / countOver);
    console.log((standard * 100) / countOver);
    console.log((kid * 100) / countOver);
}
solve(['Taxi', '10', 'standard', 'kid', 'student', 'student', 'standard', 'standard', "END", 'Scary Movie', '6', 'student', 'student', 'student', 'student', 'student', 'student', 'Finnish'])