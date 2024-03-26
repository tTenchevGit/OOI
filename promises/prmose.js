async function getName(id) {
    try {
        let responce = await fetch (`https://swapi1.dev/api/people/${id}`);
        let char = await responce.json();

        let shipResponce = await fetch(char.starships[0]);
        let ship = await shipResponce.json();
    } catch (error) {
        console.log(error.message);
    }
    return `${char.name} have ${ship.name}`;
}

getName(1)
    .then(name => console.log(name))
    .catch(err => console.log(err));
     