const { expect } = require('chai');
const flowerShop = require('../03. Flowers Shop/flowerShop');

describe('testing flowerShop object', () => {
    describe('testing calcPriceOfFlowers methode', () => {
        it('invalid flower (number)', () => {
            expect(() => {
                flowerShop.calcPriceOfFlowers(1, 2, 3);
            }).to.throw;
        });
        it('invalid price (string)', () => {
            expect(() => {
                flowerShop.calcPriceOfFlowers('a', '2', 3);
            }).to.throw();
        });
        it('invalid quantity (string)', () => {
            expect(() => {
                flowerShop.calcPriceOfFlowers('a', 2, '3');
            }).to.throw();
        });
        it('calculate correct result', () => {
            expect(flowerShop.calcPriceOfFlowers('a', 2, 2)).to.equal('You need $4.00 to buy a!');
        });
    });
    describe('testing checkFlowersAvailable methode', () => {
        it('found one flower', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['a', 'b', 'c'])).to.equal('The a are available!');
        });
        it('found two flowers', () => {
            expect(flowerShop.checkFlowersAvailable('c', ['a', 'b', 'c', 'c'])).to.equal('The c are available!');
        });
        it('sold out flower', () => {
            expect(flowerShop.checkFlowersAvailable('d', ['a', 'b', 'c'])).to.equal('The d are sold! You need to purchase more!');
        });
    });
    describe('testing sellFlowers methode', () => {
        it('invalid gardenArr (number)', () => {
            expect(() => {
                flowerShop.sellFlowers(2, 2);
            }).to.throw();
        });
        it('invalid gardenArr (string)', () => {
            expect(() => {
                flowerShop.sellFlowers('2', 2);
            }).to.throw();
        });
        it('invalid space (string)', () => {
            expect(() => {
                flowerShop.sellFlowers(['a', 'b', 'c'], 'a');
            }).to.throw();
        });
        it('invalid space (smaller than 0)', () => {
            expect(() => {
                flowerShop.sellFlowers(['a', 'b', 'c'], -2);
            }).to.throw();
        });
        it('invalid space (space bigger than gardenArr.length)', () => {
            expect(() => {
                flowerShop.sellFlowers(['a', 'b', 'c'], 4);
            }).to.throw();
        });
        it('invalid space (space equal to gardenArr.length)', () => {
            expect(() => {
                flowerShop.sellFlowers(['a', 'b', 'c'], 3);
            }).to.throw();
        });
        it('remove element', () => {
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 2)).to.equal('a / b');
        });
    });
});