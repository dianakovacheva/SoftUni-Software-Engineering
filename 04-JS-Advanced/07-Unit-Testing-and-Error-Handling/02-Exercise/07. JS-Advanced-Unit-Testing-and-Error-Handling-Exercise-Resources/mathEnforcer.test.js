const mathEnforcer = require('./mathEnforcer');
const { expect } = require('chai');

describe('mathEnforcer object tests', () => {
    // addFive(num) 
    describe('addFive function tests', () => {
        // invalid input tests
        describe('invalid input tests', () => {
            it('returns undefined if the parameter is a string', () => {
                expect(mathEnforcer.addFive('5')).to.be.undefined;
            });

            it('returns undefined if the parameter is undefined', () => {
                expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            });

            it('returns undefined if the parameter is null', () => {
                expect(mathEnforcer.addFive(null)).to.be.undefined;
            });

            it('returns undefined if the parameter is an array', () => {
                expect(mathEnforcer.addFive([])).to.be.undefined;
            });

            it('returns undefined if the parameter is an object', () => {
                expect(mathEnforcer.addFive({})).to.be.undefined;
            });
        });
        // valid input tests
        describe('valid input tests', () => {
            it('returns the result of positive integer number + 5', () => {
                expect(mathEnforcer.addFive(1)).to.equal(6);
            });

            it('returns the result of negative integer number + 5', () => {
                expect(mathEnforcer.addFive(-5)).to.equal(0);
            });

            it('returns the result of decimal number + 5', () => {
                expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
            });
        });
    });
    // subtractTen(num) 
    describe('subtractTen function tests', () => {
        // invalid input tests
        describe('invalid input tests', () => {
            it('returns undefined if the parameter is a string', () => {
                expect(mathEnforcer.subtractTen('10')).to.be.undefined;
            });

            it('returns undefined if the parameter is undefined', () => {
                expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            });

            it('returns undefined if the parameter is null', () => {
                expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            });

            it('returns undefined if the parameter is an array', () => {
                expect(mathEnforcer.subtractTen([])).to.be.undefined;
            });

            it('returns undefined if the parameter is an object', () => {
                expect(mathEnforcer.subtractTen({})).to.be.undefined;
            });
        });
        // valid input tests
        describe('valid input tests', () => {
            it('returns the result of positive integer number - 10', () => {
                expect(mathEnforcer.subtractTen(15)).to.equal(5);
            });

            it('returns the result of negative integer number -10', () => {
                expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            });

            it('returns the result of decimal number -10', () => {
                expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5);
            });
        });
    });
    // sum(num1, num2)
    describe('sum function tests', () => {
        // invalid input tests
        describe('invalid input tests', () => {
            it('returns undefined if the first parameter is a string', () => {
                expect(mathEnforcer.sum('1', 2)).to.be.undefined;
            });

            it('returns undefined if the second parameter is a string', () => {
                expect(mathEnforcer.sum(1, '2')).to.be.undefined;
            });

            it('returns undefined if both parameters are a string', () => {
                expect(mathEnforcer.sum('1', '2')).to.be.undefined;
            });
        });
        // valid input tests
        describe('valid input tests', () => {
            it('returns the sum of tow positive numbers', () => {
                expect(mathEnforcer.sum(1, 2)).to.equal(3);
            });

            it('returns the sum of one positive and one negative number', () => {
                expect(mathEnforcer.sum(5, -2)).to.equal(3);
            });

            it('returns the sum of two negative numbers', () => {
                expect(mathEnforcer.sum(-10, -2.5)).to.equal(-12.5);
            });

            it('returns the sum of two positive decimal numbers', () => {
                expect(mathEnforcer.sum(10.2, 2.5)).to.equal(12.7);
            });
        });
    });
})