function modifier(input) {
    let array = input.shift().split(' ').map(Number);
    let action = input.shift();
    while (action !== 'end') {
        let [command, index1, index2] = action.split(' ');
        switch (command) {
            case 'swap':
                swap(array, Number(index1), Number(index2));
                break;
            case 'multiply':
                multiply(array, Number(index1), Number(index2));
                break;
            case 'decrease':
                decrease(array);
                break;

        }
        action = input.shift();
    }

    function swap(array, index1, index2) {
        let temp = array[index1];
        array.splice(index1, 1, array[index2]);
        array.splice(index2, 1, temp);
    }

    function multiply(array, index1, index2) {
        array[index1] = array[index1] * array[index2];
    }

    function decrease(array) {
        array.forEach((element, index) => {
            array[index]--;
        });
    }
    console.log(array.join(', '));

}

modifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
