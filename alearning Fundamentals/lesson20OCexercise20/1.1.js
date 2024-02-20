class Employees {
    constructor(name, personalNumber) {
        this.name = name;
        this.personalNumber = personalNumber;
    }

    print() {
        
        console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
    }
}

function findNumber(array) {
    let employees = [];
    array.map((x, i) => {
        let count = array[i].length;
        let result = new Employees(x, count);
        employees.push(result); 
        return result;
    }).forEach(x => x.print());

}

findNumber(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
