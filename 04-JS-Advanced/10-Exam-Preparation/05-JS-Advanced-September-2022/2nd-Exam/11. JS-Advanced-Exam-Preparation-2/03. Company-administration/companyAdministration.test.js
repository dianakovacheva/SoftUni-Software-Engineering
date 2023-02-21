const { expect } = require('chai');
const companyAdministration = require('../03. Company-administration/companyAdministration');

describe('testing companyAdministration', () => {
    describe('testing hiringEmployee methode', () => {
        it('invalid position', () => {
            expect(() => {
                companyAdministration.hiringEmployee('a', 'b', 1);
            }).to.throw();
        });
        it('work experience equal to 3', () => {
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 3)).to.equal('a was successfully hired for the position Programmer.');
        });
        it('work experience more than 3', () => {
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 4)).to.equal('a was successfully hired for the position Programmer.');
        });
        it('work experience less than 3', () => {
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 1)).to.equal('a is not approved for this position.');
        });
    });
    describe('testing calculateSalary methode', () => {
        it('invalid hours (string)', () => {
            expect(() => {
                companyAdministration.calculateSalary('a');
            }).to.throw();
        });
        it('invalid hours (array)', () => {
            expect(() => {
                companyAdministration.calculateSalary([5]);
            }).to.throw();
        });
        it('invalid hours (negative number)', () => {
            expect(() => {
                companyAdministration.calculateSalary(-1);
            }).to.throw();
        });
        it('hours less than 160', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
        });
        it('hours more than 160', () => {
            expect(companyAdministration.calculateSalary(170)).to.equal(3550);
        });
    });
    describe('testing firedEmployee methode', () => {
        it('invalid employees (number)', () => {
            expect(() => {
                companyAdministration.firedEmployee(1, 1);
            }).to.throw();
        });
        it('invalid employees (string)', () => {
            expect(() => {
                companyAdministration.firedEmployee('a', 1);
            }).to.throw();
        });
        // it('invalid employees (empty array)', () => {
        //     expect(() => {
        //         companyAdministration.firedEmployee([], 1);
        //     }).to.throw();
        // });
        it('invalid index (string)', () => {
            expect(() => {
                companyAdministration.firedEmployee(['a', 'b', 'c'], '1');
            }).to.throw();
        });
        it('invalid index (not integer)', () => {
            expect(() => {
                companyAdministration.firedEmployee(['a', 'b', 'c'], 1.5);
            }).to.throw();
        });
        it('invalid index (smaller than 0)', () => {
            expect(() => {
                companyAdministration.firedEmployee(['a', 'b', 'c'], -1);
            }).to.throw();
        });
        it('invalid index (bigger than the array\'s length)', () => {
            expect(() => {
                companyAdministration.firedEmployee(['a'], 2);
            }).to.throw();
        });
        it('invalid index (equal to the array\'s length)', () => {
            expect(() => {
                companyAdministration.firedEmployee(['a'], 1);
            }).to.throw();
        });
        it('removes element from the array', () => {
            expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 1)).to.equal('a, c');
        })
    });
});