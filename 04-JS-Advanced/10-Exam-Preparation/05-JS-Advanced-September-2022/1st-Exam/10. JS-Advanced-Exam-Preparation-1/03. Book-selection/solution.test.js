const bookSelection = require("../03. Book-selection/solution");
const { expect } = require('chai');

describe('Tests', () => {
    describe('testing "isGenreSuitable" method', () => {
        it('checks if genre "Thriller" is suitable for given age', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it('checks if genre "Horror" is suitable for given age', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
        it('checks if genre "Thriller" is suitable for older than 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
        });
        it('checks if genre "Horror" is suitable for older than 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
        });
    });
    describe('testing "isItAffordable" method', () => {
        it('throws error message if the type of "number" is not a number', () => {
            expect(bookSelection.isItAffordable('2', 2)).to.be.an('error', 'Invalid input');
        });
        it('throws error message if the type of "budget" is not a number', () => {
            expect(bookSelection.isItAffordable(2, '2')).to.be.an('error', 'Invalid input');
        });
        it('checks if enough money to buy a book', () => {
            expect(bookSelection.isItAffordable(2, 1)).to.equal('You don\'t have enough money');
        });
        it('checks if enough money to buy a book', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal(`Book bought. You have 1$ left`);
        });
    });
    describe('testing "suitableTitles" method', () => {
        it('returns error message if first param is not an array', () => {
            expect(bookSelection.suitableTitles({}, 'str')).to.be.an('error', 'Invalid input');
        });
        it('returns error message if second param is not a string', () => {
            expect(bookSelection.suitableTitles([], 1)).to.be.an('error', 'Invalid input');
        });
        it('returns book titles of wanted genre in an array', () => {
            const booksArr = [{
                title: 'a',
                genre: 'a_genre',
            },
            {
                title: 'b',
                genre: 'b_genre',
            }
            ];
            let wantedGenre = 'a_genre';
            expect(bookSelection.suitableTitles(booksArr, wantedGenre)).to.deep.equal(['a']);
        });
    });
});

