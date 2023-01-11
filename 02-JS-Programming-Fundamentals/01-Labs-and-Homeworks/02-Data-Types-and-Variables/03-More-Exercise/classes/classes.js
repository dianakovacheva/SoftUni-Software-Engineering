// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let myCar = new Car("Ford", 2014);
// let myHusbandsCar = new Car("T-ROC", 2019);

// console.log("My car is " + myCar.age() + " years old.");
// console.log(`My husband's car is ${myHusbandsCar.name} and it is ${myHusbandsCar.age()} years old.`);


class personalInformation {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }


    age() {
        let date = new Date();
        return date.getFullYear() - this.birthYear;
    }
}
