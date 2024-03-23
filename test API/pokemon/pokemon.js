document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('but').addEventListener('click', () => {
        console.log("clicked");
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(responce => {
                if (!responce.ok) {
                    throw new Error('Network response was not ok');
                }
                return responce.json();
            })
            .then(data => {
                const newItem = document.createElement('li')
                newItem.innerText = `picathcu weight is ${data.weight}\npicathcu height is ${data.height}`
                document.body.appendChild(newItem)
                console.log(data.weight, data.height)
            })
            .catch(error => {
                console.error('catched', error);
            });
    });
}); 
