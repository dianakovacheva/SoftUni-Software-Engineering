const { expect } = require('chai');
const chooseYourCar = require('../03.Choose_Your_Car_Resources/chooseYourCar');

describe('Testing "chooseYourCar" object', () => {
    describe('testing choosingType() methode', () => {
        it('invalid year (less than 1900)', () => {
            expect(() => {
                chooseYourCar.choosingType('Sedan', 'red', 1889);
            }).to.throw();
        });
        it('invalid year (more than 2022)', () => {
            expect(() => {
                chooseYourCar.choosingType('Sedan', 'red', 2023);
            }).to.throw();
        });
        it('invalid car model (must be Sedan)', () => {
            expect(() => {
                chooseYourCar.choosingType('BMW', 'red', 2023);
            }).to.throw();
        });
        it('the year of the car is equal to 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal(`This red Sedan meets the requirements, that you have.`);
        });
        it('the year of the car is greater than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2015)).to.equal(`This red Sedan meets the requirements, that you have.`);
        });
        it('the year of the car is smaller than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2005)).to.equal(`This Sedan is too old for you, especially with that red color.`);
        });
    });
    describe('testing the brandName() methode', () => {
        it('invalid brands parameter (string)', () => {
            expect(() => {
                chooseYourCar.brandName('a', 1);
            }).to.throw();
        });
        it('invalid brands parameter (number)', () => {
            expect(() => {
                chooseYourCar.brandName(1, 1);
            }).to.throw();
        });
        it('invalid index parameter (string)', () => {
            expect(() => {
                chooseYourCar.brandName(['a', 'b', 'c'], 'a');
            }).to.throw();
        });
        it('invalid index parameter (smaller than 0)', () => {
            expect(() => {
                chooseYourCar.brandName(['a', 'b', 'c'], -1);
            }).to.throw();
        });
        it('invalid index parameter (index bigger than the array\'s length)', () => {
            expect(() => {
                chooseYourCar.brandName(['a', 'b', 'c'], 5);
            }).to.throw();
        });
        it('invalid index parameter (index equal to the array\'s length)', () => {
            expect(() => {
                chooseYourCar.brandName(['a', 'b', 'c'], 3);
            }).to.throw();
        });
        it('remove element on specified index', () => {
            expect(chooseYourCar.brandName(['a', 'b', 'c'], 0)).to.equal('b, c');
        });
    });
    describe('testing the CarFuelConsumption() methode', () => {
        it('invalid distanceInKilometers (string)', () => {
            expect(() => {
                chooseYourCar.carFuelConsumption('a', 1);
            }).to.throw();
        });
        it('invalid distanceInKilometers (negative number)', () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(-1, 1);
            }).to.throw();
        });
        it('invalid distanceInKilometers (0)', () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(0, 1);
            }).to.throw();
        });
        it('invalid consumptedFuelInLitres (string)', () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(1, 'a');
            }).to.throw();
        });
        it('invalid consumptedFuelInLitres (negative number)', () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(1, -1);
            }).to.throw();
        });
        it('invalid consumptedFuelInLitres (0)', () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(1, 0);
            }).to.throw();
        });
        it('the car is efficient enough (the liters/100km is equal to 7L)', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);
        });
        it('the car is efficient enough (the liters/100km is less than 7L)', () => {
            expect(chooseYourCar.carFuelConsumption(150, 4)).to.equal(`The car is efficient enough, it burns 2.67 liters/100 km.`);
        });
        it('the car burns to much fuel (more than 7L))', () => {
            expect(chooseYourCar.carFuelConsumption(150, 15)).to.equal(`The car burns too much fuel - 10.00 liters!`);
        });
    });
});