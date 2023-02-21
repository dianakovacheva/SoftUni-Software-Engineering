class List {
    constructor() {
        this.resultArray = [];
        this.size = this.resultArray.length;
    }

    add(value) {
        this.resultArray.push(value);
        this.size = this.resultArray.length;
        this.resultArray.sort((a, b) => a - b);
    }
    remove(index) {
        if (index < 0 || index >= this.resultArray.length) {
            throw new Error('Invalid index');
        } else {
            this.resultArray.splice(index, 1);
            this.size = this.resultArray.length;
        }
    }
    get(index) {
        if (index < 0 || index >= this.resultArray.length) {
            throw new Error('Invalid index');
        } else {
            return this.resultArray[index];
        }
    }
}

let list = new List();
list.add(30);
list.add(28);
list.add(7);
console.log(this.size);

