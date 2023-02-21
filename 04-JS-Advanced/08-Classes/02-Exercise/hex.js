class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }
    plus(number) {
        if (typeof number === 'object') {
            let result = this.value + number.value;
            return new Hex(result);
        } else {
            let result = this.value + number;
            return new Hex(result);
        }
    }
    minus(number) {
        if (typeof number === 'object') {
            let result = this.value - number.value;
            return new Hex(result);
        } else {
            let result = this.value - number;
            return new Hex(result);
        }
    }
    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));