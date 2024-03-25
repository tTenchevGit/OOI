document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('but');
    button.addEventListener('click', function () {
        const input = document.getElementById('exampleInput').value;
        let validBuses = ['1287', '1308', '1327', '2334'];
        const check = validBuses.includes(input);
        if (check) {
            fetch(`https://judgetests.firebaseio.com/businfo/${input}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Response is not OK');
                    }
                    return response.json();
                })
                .then(data => {
                    const elementP = document.createElement('p');
                    elementP.innerText = data.stopTime;
                    document.body.appendChild(elementP);
                }).catch(error => {
                    console.error('Error:', error);
                });
        } else {
            
            alert('The entered bus number is not valid. Please enter a valid bus number.');
            // const elementPnot = document.createElement('p');
            //             elementPnot.innerText = 'Not on this line';
            //             document.body.appendChild(elementPnot);
        }
    });
});
