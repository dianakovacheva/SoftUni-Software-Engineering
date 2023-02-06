const { expect } = require('chai');
const { describe } = require('mocha');
const isOddOrEven = require('./evenOrOdd');

describe('isOddOrEven function tests', () => {
    // invalid input tests
    describe('invalid input tests', () => {
        it('returns undefined if the parameter is number', () => {
            expect(isOddOrEven(17)).to.be.undefined;
        });

        it('returns undefined if the parameter is array', () => {
            expect(isOddOrEven([])).to.be.undefined;
        });

        it('returns undefined if the parameter is object', () => {
            expect(isOddOrEven({})).to.be.undefined;
        });

        it('returns undefined if the parameter is undefined', () => {
            expect(isOddOrEven(undefined)).to.be.undefined;
        });

        it('returns undefined if the parameter is null', () => {
            expect(isOddOrEven(null)).to.be.undefined;
        });
    });
    // valid input tests
    describe('valid input tests', () => {
        it('should return "even" as result', () => {
            const string = 'Hi';
            expect(isOddOrEven(string)).to.equal('even');
        });

        it('should return "odd" as result', () => {
            const string = 'Hello';
            expect(isOddOrEven(string)).to.equal('odd');
        });
    });
});