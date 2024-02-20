function solve(input) {
    let sideL = Number(input.shift());
    let longL = Number(input.shift());
    let heightL = Number(input.shift());
    let room = sideL * longL * heightL;
    let count = input.shift();
    let boxescount = 0
    while (count !== 'Done') {
        let num = Number(count);
        count = input.shift();
        boxescount += num;
        if (room < (boxescount * 1)) {
            let difference = (boxescount * 1) - room;
            console.log(`'No more space! You need ${Math.abs(difference)} Cubic meters more.'`)
            break;
        }
    }
    if (room > (boxescount * 1)) {
        let difference = room - (boxescount * 1);
        console.log(`"${Math.abs(difference)} Cubic meters left."`)
    }
}
solve(['10', '1', '2', '4', '6', 'Done'])