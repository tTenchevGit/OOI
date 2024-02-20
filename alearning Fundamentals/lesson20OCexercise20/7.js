class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type,
            this.model = model,
            this.parts = parts,
            this.fuel = fuel,
            this.parts.quality = this.parts.engine * this.parts.power;
    }
    drive(fuelLost) {
        this.fuel -= fuelLost;
    }
}
let parts = { engine: 6, power: 100 };

let vehicle = new Vehicle('Opel', 'astra', parts, 200);

vehicle.drive(100)
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
console.log(vehicle.type);
console.log(vehicle.model);

parts = { engine: 6, power: 1050 };

vehicle = new Vehicle('AUDI', 'S8', parts, 2050);

vehicle.drive(100)
console.log(vehicle.type);
console.log(vehicle.model);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);