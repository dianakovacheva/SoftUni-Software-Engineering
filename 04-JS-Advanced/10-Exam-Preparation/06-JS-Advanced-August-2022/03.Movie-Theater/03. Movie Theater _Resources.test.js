const { expect } = require('chai');
const movieTheater = require('../03.Movie-Theater/03. Movie Theater _Resources');

describe("Tests movieTheater", () => {
  describe('testing the ageRestrictions() methode', () => {
    it('movieRating is equal to "G"', () => {
      expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
    });
    it('movieRating is equal to "PG",', () => {
      expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
    });
    it('movieRating is equal to "R",', () => {
      expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
    });
    it('movieRating is equal to "NC-17",', () => {
      expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
    });
    it('invalid movieRating (number),', () => {
      expect(movieTheater.ageRestrictions(1)).to.equal(`There are no age restrictions for this movie`);
    });
  });
  describe('testing the moneySpent() methode', () => {
    it('invalid tickets (string)', () => {
      expect(() => {
        movieTheater.moneySpent('a', ['a', 'b', 'c'], ['a', 'b', 'c']);
      }).to.throw();
    });
    it('invalid food (string)', () => {
      expect(() => {
        movieTheater.moneySpent(2, 'a', ['a', 'b', 'c']);
      }).to.throw();
    });
    it('invalid food (number)', () => {
      expect(() => {
        movieTheater.moneySpent(2, 1, ['a', 'b', 'c']);
      }).to.throw();
    });
    it('invalid drinks (string)', () => {
      expect(() => {
        movieTheater.moneySpent(2, ['a', 'b', 'c'], 'a');
      }).to.throw();
    });
    it('invalid drinks (number)', () => {
      expect(() => {
        movieTheater.moneySpent(2, ['a', 'b', 'c'], 1);
      }).to.throw();
    });
    it('correct cost for one ticket, one nachos and one soda, total price less than 50', () => {
      expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 23.50`);
    });
    it('correct cost for one ticket, one nachos and one water, total price less than 50', () => {
      expect(movieTheater.moneySpent(1, ['Nachos'], ['Water'])).to.equal(`The total cost for the purchase is 22.50`);
    });
    it('correct cost for one ticket, one popcorn and one soda, total price less than 50', () => {
      expect(movieTheater.moneySpent(1, ['Popcorn'], ['Soda'])).to.equal(`The total cost for the purchase is 22.00`);
    });
    it('correct cost for one ticket, one popcorn and one water, total price less than 50', () => {
      expect(movieTheater.moneySpent(1, ['Popcorn'], ['Water'])).to.equal(`The total cost for the purchase is 21.00`);
    });
    it('correct cost for one ticket, one nachos and one soda, total price bigger than 50', () => {
      expect(movieTheater.moneySpent(4, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 54.80`);
    });
    it('correct cost for one ticket, one nachos and one water, total price bigger than 50', () => {
      expect(movieTheater.moneySpent(4, ['Nachos'], ['Water'])).to.equal(`The total cost for the purchase with applied discount is 54.00`);
    });
    it('correct cost for one ticket, one popcorn and one soda, total price bigger than 50', () => {
      expect(movieTheater.moneySpent(4, ['Popcorn'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 53.60`);
    });
    it('correct cost for one ticket, one popcorn and one water, total price less than 50', () => {
      expect(movieTheater.moneySpent(4, ['Popcorn'], ['Water'])).to.equal(`The total cost for the purchase with applied discount is 52.80`);
    });
  });
  describe('testing the reservation() methode', () => {
    it('invalid rowsArray (string)', () => {
      expect(() => {
        movieTheater.reservation('a', 1);
      }).to.throw();
    });
    it('invalid rowsArray (number)', () => {
      expect(() => {
        movieTheater.reservation(1, 1);
      }).to.throw();
    });
    it('invalid neededSeatsCount (string)', () => {
      expect(() => {
        movieTheater.reservation(['a', 'b', 'c'], 'a');
      }).to.throw();
    });
    it('free seats equal to 7', () => {
      expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7)).to.equal(1);
    });
    it('free seats less than 7', () => {
      expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5)).to.equal(2);
    });
  });
});
