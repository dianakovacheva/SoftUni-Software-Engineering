const { expect } = require('chai');
const rentCar = require('../03. Rent Car/rentCar');

describe('testing rentCar function', () => {
    describe('testing the "searchCar(shop, model)" methode', () => {
        it('invalid shop (number)', () => {
            expect(() => {
                rentCar.searchCar(1, 'a');
            }).to.throw();
        });

        it('invalid shop (string)', () => {
            expect(() => {
                rentCar.searchCar('abc', 'a');
            }).to.throw();
        });

        it('invalid model (number)', () => {
            expect(() => {
                rentCar.searchCar('abc', 1);
            }).to.throw();
        });

        it('finds one car', () => {
            const shop = ['a', 'b', 'c'];
            const model = 'a';
            const result = rentCar.searchCar(shop, model);
            expect(result).to.equal('There is 1 car of model a in the catalog!');
        });

        it('finds many cars', () => {
            const shop = ['a', 'b', 'c', 'b'];
            const model = 'b';
            const result = rentCar.searchCar(shop, model);
            expect(result).to.equal('There is 2 car of model b in the catalog!');
        });

        it('car not found', () => {
            expect(() => {
                rentCar.searchCar(['a', 'b', 'c'], 'z');
            }).to.throw();
        });

        it('invalid model', () => {
            expect(() => {
                rentCar.searchCar(['a', 'b', 'c'], 1);
            }).to.throw();
        });
    });
    describe('testing the "calculatePriceOfCar(model, days)" methode', () => {
        it('invalid model (number)', () => {
            expect(() => {
                rentCar.calculatePriceOfCar(1, 2);
            }).to.throw();
        });

        it('invalid days (string)', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('Audi', '1');
            }).to.throw();
        });

        it('car not found', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('a', 1);
            }).to.throw();
        });

        it('calculate correct price for model', () => {
            const result = rentCar.calculatePriceOfCar('Audi', 2);
            expect(result).to.equal('You choose Audi and it will cost $72!');
        });
    });
    describe('testing the "checkBudget(costPerDay, days, budget)" methode', () => {
        it('invalid costPerDay (string)', () => {
            expect(() => {
                rentCar.checkBudget('1', 2, 3);
            }).to.throw();
        });

        it('invalid days (string)', () => {
            expect(() => {
                rentCar.checkBudget(1, '2', 3);
            }).to.throw();
        });

        it('invalid budget (string)', () => {
            expect(() => {
                rentCar.checkBudget(1, 2, '3');
            }).to.throw();
        });

        it('enough budget', () => {
            const result = rentCar.checkBudget(1, 1, 1);
            expect(result).to.equal('You rent a car!');
        });

        it('enough budget, left money', () => {
            const result = rentCar.checkBudget(20, 2, 60);
            expect(result).to.equal('You rent a car!');
        });

        it('not enough budget', () => {
            const result = rentCar.checkBudget(1, 2, 1);
            expect(result).to.equal('You need a bigger budget!');
        });
    });
});
