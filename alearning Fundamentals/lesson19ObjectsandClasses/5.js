function ConvertInJson(name, lastName, hairColor){
    let toObject = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }
    let toJson = JSON.stringify(toObject)
    console.log(toJson);
}
ConvertInJson('George', 'Jones', 'Brown')