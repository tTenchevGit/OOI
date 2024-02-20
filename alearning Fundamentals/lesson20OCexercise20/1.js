// class Employees {
//     constructor(name, personalNumber) {
//         name = name;
//         personalNumber = personalNumber
//     }
//     print() {
//         console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`)
//     }
// }

function findNumber(array){
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        let count = array[i].length;
        obj.name = array[i];
        obj.personalNumber = count; 
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
    }
    
}
findNumber(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson','Brendan Villarreal']);