class Towns{
    constructor(town, latitude, longitude){
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
function arrayToObjectInClass(array){
    
    array.forEach((x) =>{
        let [town, latitude, longitude] = x.split(" | ");
        const townInfo = new Towns(town, Number(latitude).toFixed(2), Number(longitude).toFixed(2))
        console.log(townInfo);
    })
}
arrayToObjectInClass(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);