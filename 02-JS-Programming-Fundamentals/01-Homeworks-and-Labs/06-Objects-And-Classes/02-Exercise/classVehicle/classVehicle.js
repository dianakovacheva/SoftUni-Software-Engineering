class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = parts;
    this.fuel = fuel;
    this.parts.quality = parts.engine * parts.power;
  }

  drive(fuelConsumption) {
    this.fuel -= fuelConsumption;
  }
}

// Object
let parts = { 
    engine: 6, 
    power: 100
};

let myCar = new Vehicle("a", "b", parts, 200);

myCar.drive(100);

console.log(myCar.fuel);
console.log(myCar.parts.quality);