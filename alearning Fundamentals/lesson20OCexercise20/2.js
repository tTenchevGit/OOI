class Towns{
    constructor(town, latitude, longitude){
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
function arrayToObjectInClass(array){
    let storredObj = [];
    array.map((x, i) =>{
        let [town, latitude, longitude] = x.split(" | ");
        let townInfo = new Towns(town, Number(latitude).toFixed(2), Number(longitude).toFixed(2))
        storredObj.push(townInfo);
        console.log(storredObj[i])
        
    })
}
arrayToObjectInClass(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);