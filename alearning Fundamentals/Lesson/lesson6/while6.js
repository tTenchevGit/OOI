const solve = (input) => {
    let side1 = Number(input.shift());
    let side2 = Number(input.shift());
    let cake = side1 * side2;
    let command = input.shift();
    let pieces = 0;
    while (pieces <= cake) {
        if (command !== 'Stop') {
            let num = Number(command);
            pieces += num
        } else {
             let diff = cake - pieces; 
            console.log(`${diff} pieces are left.`)
            break;
        }
        command = input.shift();
    }
    if((pieces - cake) > 0){
        let left = pieces - cake;
        console.log(`No more cake left! You need ${left}  pieces more.`)
    }
}
solve(["10", "10", "20", "Stop", '20', '20', '21'])

