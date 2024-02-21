function secret(input) {
    let message = input.shift();
    let element = input.shift();
    while (element !== 'Reveal') {
        let [command, action, newAction] = element.split(':|:');
        switch (command) {
            case 'InsertSpace':
                message = insertSpace(message, action);
                console.log(message);
                break;
            case 'Reverse':
                if (message.includes(action)) {
                    message = reverse(message, action);
                    console.log(message);
                } else {
                    console.log('error');; // return original message if action not found
                }

                break;
            case 'ChangeAll':
                message = changeAll(message, action, newAction);
                console.log(message);
                break;
        }
        element = input.shift()
    }

    console.log(`You have a new text message: ${message}`);


    function insertSpace(message, action) {
        return message.slice(0, action) + ' ' + message.slice(action);
    }

    function reverse(message, action) {
        let index = message.indexOf(action);

        return (message.substring(0, index) +
            message.substring(index + action.length)) +
            message.substring(index, index + action.length).split('').reverse().join('');
    }

    function changeAll(message, action, newAction) {
        while (message.includes(action)) {
            message = message.replace(action, newAction)
        }
        return message;
    }
}
secret([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
