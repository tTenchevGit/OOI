document.addEventListener('DOMContentLoaded', function () {
    let result = [];
    const newItem = document.createElement('p')
    console.log('Document loaded, adding event listener...');
    document.getElementById('but').addEventListener('click', () => {
        console.log('Button clicked, fetching data...');
        fetch('https://randomuser.me/api/')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                let john = data.results[0];
                let array = Object.entries(john);
                result.push(array[3].join(': '));
                newItem.innerText = result.join('\n')
                document.body.appendChild(newItem);
                console.log(data.results[1].gender);
            })
            .catch(error => {
                console.error('asdadasdasd', error);
            });
    }); 
});