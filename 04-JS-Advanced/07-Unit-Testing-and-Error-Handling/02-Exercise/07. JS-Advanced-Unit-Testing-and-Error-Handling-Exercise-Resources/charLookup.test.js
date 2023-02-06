const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('lookupChar function tests', () => {
    // invalid input tests
    describe('invalid input tests', () => {
        it('returns undefined if the first parameter is not a string', () => {
            expect(lookupChar(1, 1)).to.be.undefined;
        });

        it('returns undefined if the second parameter is not a number', () => {
            expect(lookupChar('Hello', 'string')).to.be.undefined;
        });

        it('returns undefined if the second number is a decimal number', () => {
            expect(lookupChar('Hello', 2.4)).to.be.undefined;
        })

        it('returns undefined if the first and the second parameters are not currect', () => {
            expect(lookupChar(2, 'string')).to.be.undefined;
        });

        it('returns "Incorrect index" if passed index is bigger than the length of the string', () => {
            expect(lookupChar('Good Morning', 20)).to.equal('Incorrect index');
        });

        it('returns "Incorrect index" if passed index is equal to the length of the string', () => {
            expect(lookupChar('Hi', 2)).to.equal('Incorrect index');
        });

        it('returns "Incorrect index" if passed index is smaller than the length of the string', () => {
            expect(lookupChar('Hello', -1)).to.equal('Incorrect index');
        });

        it('returns "Incorrect index" if the input is an empty string', () => {
            expect(lookupChar('', 0)).to.equal('Incorrect index');
        });
    });
    // valid input tests
    describe('valid input tests', () => {
        it('returns char at index', () => {
            expect(lookupChar('Hello', 1)).to.equal('e');
        });

        it('returns char at index', () => {
            expect(lookupChar('H', 0)).to.equal('H');
        });
    })
});