const { expect } = require('chai');
const { describe } = require('mocha');
const isSymmetric = require('./checkForSymmetry');

describe('Symmetry checker', () => {
    it('returns true for symmetric array', () => {
        const array = [1, 2, 2, 1];
        expect(isSymmetric(array)).to.be.true;
    });

    it('returns false for unsymmetric array', () => {
        const array = [1, 2, 3];
        expect(isSymmetric(array)).to.be.false;
    });

    it('returns false with no array argument', () => {
        const data = 121;
        expect(isSymmetric(data)).to.be.false;
    });

    it('returns false for type mismatched element', () => {
        const array = [1, 2, 2, '1'];
        expect(isSymmetric(array)).to.be.false;
    });

    it('returns true when array length is an odd number', () => {
        const array = [1, 2, 1];
        expect(isSymmetric(array)).to.be.true;
    });

    it('returns false for array-like argument', () => {
        const data = '1221';
        expect(isSymmetric(data)).to.be.false;
    });
})