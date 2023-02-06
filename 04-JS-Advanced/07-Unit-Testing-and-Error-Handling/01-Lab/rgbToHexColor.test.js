const { expect } = require('chai');
const { describe } = require('mocha');
const rgbToHexColor = require('./rgbToHexColor');

describe('RGB to Hex', () => {
    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });

    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('converts 15, 15, 15 to #0F0F0F', () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F');
    });

    it('returns undefined for missing parameters', () => {
        expect(rgbToHexColor(0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0)).to.equal(undefined);
        expect(rgbToHexColor()).to.equal(undefined);
    });

    it('returns undefined for out of lower bound', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
    });

    it('returns undefined for out of upper bound', () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    });

    it('returns undefined for floats', () => {
        expect(rgbToHexColor(1.1, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 1.1, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 1.1)).to.equal(undefined);
    });

    it('returns undefined for string argument', () => {
        expect(rgbToHexColor('1', 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, '1', 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, '1')).to.equal(undefined);
    });
})