function solve(input){
    let object = JSON.parse(input);
    for (const key in object) {
        console.log(`${key}: ${object[key]}`)   
    }
        
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');