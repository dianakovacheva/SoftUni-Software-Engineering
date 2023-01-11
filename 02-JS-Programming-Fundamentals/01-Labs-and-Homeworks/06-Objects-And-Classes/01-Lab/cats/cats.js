function catsSay(arr) {

    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let line of arr) {
        let currentLine = line.split(' ');
        let name = currentLine[0];
        let age = Number(currentLine[1]);

        let cat = new Cat(name, age);

        cat.meow();
    }
}

catsSay(['Candy 1', 'Poppy 3', 'Nyx 2'])