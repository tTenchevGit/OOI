function reset(input) {
    let string = input[0];
    for (let i = 1; i < input.length; i++) {
        let line = input[i].split(' ')
        switch (line[0]) {
            case "TakeOdd":
                console.log(takeOdd(string));
                string = takeOdd(string);
                break;
            case "Cut":
                console.log(cut(string, Number(line[1]), Number(line[2])));
                string = cut(string, Number(line[1]), Number(line[2]));
                break;
            case "Substitute":
                if(string.includes(line[1])){
                console.log(substitute(string, line[1], line[2]));
                string = substitute(string, line[1], line[2]);
                } else{
                    console.log('Nothing to replace!');
                }
                break;
            case 'Done':
                console.log(`Your password is: ${string}`);    
        }
    }

}

        function takeOdd(string) {
            let arrFromStr = string.split('');
            let oddPassword = [];
            arrFromStr.forEach((element, i) => {
                if (i % 2 !== 0) {
                    oddPassword.push(element);
                }
            });
            return oddPassword.join('');
        }

        function cut(string, start, end) {
         let result = string.substring(0, start) + string.substring(start + end);
            return result;
        }

        function substitute(string, oldSymbol, newSymbol) {
           
            while (string.includes(oldSymbol))
                string = string.replace(oldSymbol, newSymbol)
            return string;
    
        }
        

reset(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr', 'TakeOdd', 'Cut 15 3', 'Substitute :: -', 'Substitute | ^', 'Done']);