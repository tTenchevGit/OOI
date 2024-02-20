class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    get totalCost() {
        let totalCost = 0;
        this.storage.forEach(product => {
            totalCost += product.quantity * product.price;
        });
        return totalCost;
    }

    addProduct(product) {
    
        this.storage.push(product);
        this.capacity -= product.quantity;
    }

    getProducts() {

        let result = this.storage.map(product => JSON.stringify(product));
        return result.join("\n");
    }
}



let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };

let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.getProducts());
console.log("Capacity:", storage.capacity);
console.log("Total Cost:", storage.totalCost);