class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function solve(array) {

    let cats = [];

    for (let i = 0; i < array.length; i++) {
        let [name, ageT] = array[i].split(' ');
        let cat = new Cat(name, Number(ageT));
        cats.push(cat);
    }
    console.log(cats)
    for (const cat of cats) {
        cat.meow();  
    }
}

solve(['Mellow 2', 'Tom 5']);