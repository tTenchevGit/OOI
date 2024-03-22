document.addEventListener('DOMContentLoaded', function() {
    const  newItem = document.createElement('li')
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
                newItem.innerText = array.join('\n');
                this.body.appendChild(newItem);
                console.log(data.results[0].gender);
            })
            .catch(error => {
                console.error('asdadasdasd', error);
            });
    });
});