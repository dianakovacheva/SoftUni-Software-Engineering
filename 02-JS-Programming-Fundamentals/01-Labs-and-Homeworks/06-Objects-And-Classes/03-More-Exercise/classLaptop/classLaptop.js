class Laptop {
  isOn = false;

  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
  }

  turnOn() {
    if (!this.isOn) {
      this.isOn = true;
      this.quality--;
    }
  }

  turnOff() {
    if (this.isOn) {
      this.isOn = false;
      this.quality--;
    }
  }

  showInfo() {
    let parsedInfo = JSON.stringify(this.info);
    return parsedInfo;
  }

  get price() {
    return 800 - this.info.age * 2 + this.quality * 0.5;
  }
}

let info = { producer: "Lenovo", age: 3, brand: "Thinkpad" };
let laptop = new Laptop(info, 10);

laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
laptop.turnOn();
laptop.turnOff();
console.log(laptop.isOn);
console.log(laptop.price);
