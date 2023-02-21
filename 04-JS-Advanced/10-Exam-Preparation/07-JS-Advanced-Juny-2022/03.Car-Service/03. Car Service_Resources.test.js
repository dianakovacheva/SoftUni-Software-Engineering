const { expect } = require('chai');
const carService = require('../03-Unit-tests/03. Car Service_Resources');

describe('testing carService', () => {
  describe('testing the isItExpensive() methode', () => {
    it('valid parameter (Engine)', () => {
      expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
    });
    it('valid parameter (Transmission)', () => {
      expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
    });
    it('invalid parameter (number)', () => {
      expect(carService.isItExpensive(1)).to.equal(`The overall price will be a bit cheaper`);
    });
  });
  describe('testing the discount() methode', () => {
    it('invalid numberOfParts (string)', () => {
      expect(() => {
        carService.discount('a', 1);
      }).to.throw;
    });
    it('invalid totalPrice (string)', () => {
      expect(() => {
        carService.discount(1, 'a');
      }).to.throw;
    });
    it('numberOfParts smaller than 2', () => {
      expect(carService.discount(1, 2)).to.equal('You cannot apply a discount');
    });
    it('numberOfParts equal to 2', () => {
      expect(carService.discount(2, 2)).to.equal('You cannot apply a discount');
    });
    it('numberOfParts higher than 2 and smaller than 7', () => {
      expect(carService.discount(3, 2)).to.equal(`Discount applied! You saved 0.3$`);
    });
    it('numberOfParts higher than 2 and equal to 7', () => {
      expect(carService.discount(7, 5)).to.equal(`Discount applied! You saved 0.75$`);
    });
    it('numberOfParts higher than 7', () => {
      expect(carService.discount(10, 2)).to.equal(`Discount applied! You saved 0.6$`);
    });
  });
  describe('testing the partsToBuy() methode', () => {
    it('empty partsCatalog', () => {
      expect(carService.partsToBuy([], ['a', 'b', 'c'])).to.equal(0);
    });
    it('invalid partsCatalog  (string)', () => {
      expect(() => {
        carService.discount(carService.partsToBuy('a', ['a', 'b', 'c']));
      }).to.throw;
    });
    it('invalid partsCatalog  (number)', () => {
      expect(() => {
        carService.discount(carService.partsToBuy(1, ['a', 'b', 'c']));
      }).to.throw;
    });
    it('invalid neededParts (string)', () => {
      expect(() => {
        carService.discount(carService.partsToBuy(['a', 'b', 'c'], 'a'));
      }).to.throw;
    });
    it('invalid neededParts (number)', () => {
      expect(() => {
        carService.discount(carService.partsToBuy(['a', 'b', 'c'], 1));
      }).to.throw;
    });
    it('correct price if buying "blowoff valve"', () => {
      expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], (["blowoff valve", "injectors"]))).to.equal(145);
    });
    it('correct price if buying "coil springs"', () => {
      expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], (["coil springs"]))).to.equal(230);
    });
  });
});