function solve(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());
    let large = Number.MIN_SAFE_INTEGER;
    let isBiggest = false;
    while (floors > 0) {
        if (large > floors) {
            large = floors;
        } else if (large = floors) {
            isBiggest = true;
        }

        for (let i = 0; i < rooms; i++) {
            if (isBiggest) {
                console.log(`L${floors}${i}`);
            

            }
            if (floors % 2 === 0 && isBiggest !== true) {
               console.log(`O${floors}${i}`);
            }
            if (floors % 2 === 1 && isBiggest !== true) {
                console.log(`A${floors}${i}`);
            }
            
        }
        isBiggest = false;
        floors--;
        
    }

}

solve(['6', '4']);
