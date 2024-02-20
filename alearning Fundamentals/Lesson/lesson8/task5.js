function solve(input) {
    let num = Number(input.shift());
    let result = '';

    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = i;
        let isExact = true;

        while (currentNumber > 0) {
            let digit = currentNumber % 10;

            if (num === 0 || num % digit !== 0) {
                isExact = false;
                break;
            }

            currentNumber = Math.floor(currentNumber / 10);
        }

        if (isExact) {
            result += `${i}  `;
        }
    }

    console.log(result.trim());
}

solve(['3']);
