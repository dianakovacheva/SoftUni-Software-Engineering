const { expect } = require('chai');
const findNewApartment = require('../03-Unit-tests/findApartment');

describe('testing findNewApartment', () => {
  describe('testing the isGoodLocation() methode', () => {
    it('invlaid city', () => {
      expect(findNewApartment.isGoodLocation('a', true)).to.equal('This location is not suitable for you.');
    });
    it('no near transport', () => {
      expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
    });
    it('invalid city', () => {
      expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
    });
    it('invalid city (number)', () => {
      expect(() => {
        findNewApartment.isGoodLocation(1, true);
      }).to.throw();
    });
    it('invalid nearPublicTransportation (number)', () => {
      expect(() => {
        findNewApartment.isGoodLocation('Sofia', 1);
      }).to.throw();
    });
    it('invalid nearPublicTransportation (string)', () => {
      expect(() => {
        findNewApartment.isGoodLocation('Sofia', 'true');
      }).to.throw();
    });
    describe('testing the isLargeEnough() methode', () => {
      it('invalid apartments (number)', () => {
        expect(() => {
          findNewApartment.isLargeEnough(1, 1);
        }).to.throw();
      });
      it('invalid apartments (string)', () => {
        expect(() => {
          findNewApartment.isLargeEnough('a', 1);
        }).to.throw();
      });
      it('invalid apartments (empty array)', () => {
        expect(() => {
          findNewApartment.isLargeEnough([], 1);
        }).to.throw();
      });
      it('invalid minimalSquareMeters (string)', () => {
        expect(() => {
          findNewApartment.isLargeEnough([1, 2, 3], 'a');
        }).to.throw();
      });
      it('area equal to minimalSquareMeters', () => {
        expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60');
      });
      it('area bigger than minimalSquareMeters', () => {
        expect(findNewApartment.isLargeEnough([40, 50, 100, 120], 90)).to.equal('100, 120');
      });
    });
    describe('testing the isItAffordable() methode', () => {
      it('invalid price (string)', () => {
        expect(() => {
          findNewApartment.isItAffordable('a', 1);
        }).to.throw();
      });
      it('invalid price (equal to 0)', () => {
        expect(() => {
          findNewApartment.isItAffordable(0, 1);
        }).to.throw();
      });
      it('invalid price (less than 0)', () => {
        expect(() => {
          findNewApartment.isItAffordable(-1, 1);
        }).to.throw();
      });
      it('invalid budget (string)', () => {
        expect(() => {
          findNewApartment.isItAffordable(1, 'a');
        }).to.throw();
      });
      it('invalid budget (less than 0)', () => {
        expect(() => {
          findNewApartment.isItAffordable(1, -1);
        }).to.throw();
      });
      it('invalid budget (equal to 0)', () => {
        expect(() => {
          findNewApartment.isItAffordable(1, 0);
        }).to.throw();
      });
      it('not enough money to offer this home', () => {
        expect(findNewApartment.isItAffordable(2, 1)).to.equal('You don\'t have enough money for this house!');
      });
      it('enough money to offer this home', () => {
        expect(findNewApartment.isItAffordable(2, 3)).to.equal('You can afford this home!');
      });
    })
  });
})