const { expect } = require('chai');
const { describe } = require('mocha');
const sum = require('./sumOfNumbers');

describe('Sum of numbers', () => {
    it('Sould return the sum of all numbers in the array', () => {
        const numbersArray = [1, 2, 3, 4, 5];
        const expectedSum = 15;
        const actualSum = sum(numbersArray);
        expect(actualSum).to.equal(expectedSum);
    });

    it('Sould return the sum with negative number in the array', () => {
        const numbersArray = [1, 2, 3, 4, -5];
        const expectedSum = 5;
        const actualSum = sum(numbersArray);
        expect(actualSum).to.equal(expectedSum);
    });

    it('Sould return 0 when only zeros are given', () => {
        const numbersArray = [0, 0, 0, 0];
        const expectedSum = 0;
        const actualSum = sum(numbersArray);
        expect(actualSum).to.equal(expectedSum);
    });
})