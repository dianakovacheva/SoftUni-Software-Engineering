const { expect } = require('chai');
const motorcycleRider = require('../03.Motorcycle Rider -Resources/Motorcycle Rider');

describe("Tests motorcycleRider", () => {
  describe("tests licenseRestriction() methode", () => {
    it('valid category (AM)', () => {
      expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
    });
    it('valid category (A1)', () => {
      expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
    });
    it('valid category (A2)', () => {
      expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
    });
    it('valid category (A)', () => {
      expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
    });
    it('invalid category (1)', () => {
      expect(() => {
        motorcycleRider.licenseRestriction(1);
      }).to.throw();
    });
    it('invalid category (a)', () => {
      expect(() => {
        motorcycleRider.licenseRestriction('a');
      }).to.throw();
    });
  });
  describe('testing the motorcycleShowroom() methode', () => {
    it('invalid engineVolume (string)', () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom('a', 60);
      }).to.throw();
    });
    it('invalid engineVolume (number)', () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom(1, 60);
      }).to.throw();
    });
    it('invalid engineVolume (the length of the array is smaller than 1)', () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom([], 60);
      }).to.throw();
    });
    it('invalid maximumEngineVolume (string)', () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom(['1', '2', '3'], 'a');
      }).to.throw();
    });
    it('invalid maximumEngineVolume (less than 50)', () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom(['1', '2', '3'], 1);
      }).to.throw();
    });
    it('returns number of available bikes', () => {
      expect(motorcycleRider.motorcycleShowroom(['60', '70', '80'], 90)).to.equal(`There are 3 available motorcycles matching your criteria!`);
    });
  });
  describe('testing the	otherSpendings() methode', () => {
    it('invalid equipment (string)', () => {
      expect(() => {
        motorcycleRider.otherSpendings('a', ['a', 'b'], true);
      }).to.throw();
    });
    it('invalid equipment (number)', () => {
      expect(() => {
        motorcycleRider.otherSpendings(1, ['a', 'b'], true);
      }).to.throw();
    });
    it('invalid consumables (string)', () => {
      expect(() => {
        motorcycleRider.otherSpendings(['a', 'b'], 'a', true);
      }).to.throw();
    });
    it('invalid consumables (number)', () => {
      expect(() => {
        motorcycleRider.otherSpendings(['a', 'b'], 1, true);
      }).to.throw();
    });
    it('invalid discount (number), should be boolean', () => {
      expect(() => {
        motorcycleRider.otherSpendings(['a', 'b'], ['a', 'b'], 1);
      }).to.throw();
    });
    it('invalid discount (string), should be boolean', () => {
      expect(() => {
        motorcycleRider.otherSpendings(['a', 'b'], ['a', 'b'], 'true');
      }).to.throw();
    });
    it('total price if equipment is helmet, consumables is engine oil and discount is "false"', () => {
      // ['helmet', 'jacked'], ['engine oil', 'oil filter']
      expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.equal(`You spend $270.00 for equipment and consumables!`);
    });
    it('total price if equipment is helmet, consumables is oil filter and discount is "false"', () => {
      expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], false)).to.equal(`You spend $230.00 for equipment and consumables!`);
    });
    it('total price if equipment is jacked, consumables is engine oil and discount is "false"', () => {
      expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], false)).to.equal(`You spend $370.00 for equipment and consumables!`);
    });
    it('total price if equipment is jacked, consumables is oil filter and discount is "false"', () => {
      expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], false)).to.equal(`You spend $330.00 for equipment and consumables!`);
    });
    // used 10% discount
    it('total price if equipment is helmet, consumables is engine oil and discount is "true"', () => {
      expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.equal(`You spend $243.00 for equipment and consumables with 10% discount!`);
    });
    it('total price if equipment is helmet, consumables is oil filter and discount is "true"', () => {
      expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], true)).to.equal(`You spend $207.00 for equipment and consumables with 10% discount!`);
    });
    it('total price if equipment is jacked, consumables is engine oil and discount is "true"', () => {
      expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], true)).to.equal(`You spend $333.00 for equipment and consumables with 10% discount!`);
    });
    it('total price if equipment is jacked, consumables is oil filter and discount is "true"', () => {
      expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], true)).to.equal(`You spend $297.00 for equipment and consumables with 10% discount!`);
    });
  });
});
