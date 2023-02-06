const { expect } = require('chai');
const { describe } = require('mocha');
const createCalculator = require('./createCalculator');

describe('Calculator', () => {
    let calc = null;
    beforeEach(() => {
        calc = createCalculator();
    });
    // number alguments
    describe('number alguments', () => {
        it('returns zero as initial value', () => {
            expect(calc.get()).to.equal(0);
        });

        it('can add numbers', () => {
            calc.add(1);
            expect(calc.get()).to.equal(1);
        });

        it('can add more than one number', () => {
            calc.add(1);
            calc.add(1);
            expect(calc.get()).to.equal(2);
        });

        it('can subtract numbers', () => {
            calc.subtract(1);
            expect(calc.get()).to.equal(-1);
        });

        it('can add and subtract numbers', () => {
            calc.add(2);
            calc.subtract(1);
            expect(calc.get()).to.equal(1);
        });
    });
    // string arguments
    describe('string arguments', () => {
        it('can add numbers as strings', () => {
            calc.add('1');
            expect(calc.get()).to.equal(1);
        });

        it('can subtract numbers as strings', () => {
            calc.subtract('1');
            expect(calc.get()).to.equal(-1);
        });
    });
    // test overloadings
    describe('test overloadings', () => {
        it('overload 1', () => {
            calc.add(17);
            expect(calc.get()).to.equal(17);
        });

        it('overload 2', () => {
            calc.add(17);
            calc.add(15);
            expect(calc.get()).to.equal(32);
        });

        it('overload 3', () => {
            calc.add(17);
            calc.add(32);
            calc.subtract(15);
            expect(calc.get()).to.equal(34);
        });

        it('overload 1', () => {
            calc.add(17);
            calc.add('15');
            calc.subtract(1);
            calc.add(5);
            calc.subtract('10');
            expect(calc.get()).to.equal(26);
        });
    });
});