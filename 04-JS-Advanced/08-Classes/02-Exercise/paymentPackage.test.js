const { expect } = require('chai');
const PaymentPackage = require('./paymentPackage');
describe('paymentPackage', () => {
    describe('create instance', () => {
        let instance;
        beforeEach(function () {
            instance = new PaymentPackage('Diana', 17);
        });
        it('returns correct name', () => {
            expect(instance._name).to.equal('Diana');
        });
        it('returns currect value', () => {
            expect(instance._value).to.equal(17);
        });
        it('returns current value of VAT', () => {
            expect(instance._VAT).to.equal(20);
        });
        it('checks if type of VAT is number', () => {
            expect(typeof instance._VAT).to.equal('number');
        });
        it('returns if active is true', () => {
            expect(instance._active).to.be.true;
        });
        it('checks if type of active is boolean', () => {
            expect(typeof instance._active).to.equal('boolean');
        });
    });
    describe('test getters', () => {
        let instance;
        beforeEach(() => {
            instance = new PaymentPackage('Diana', 17);
        });
        it('returns correct name', () => {
            expect(instance.name).to.equal('Diana');
        });
        it('returns currect value of the property value', () => {
            expect(instance.value).to.equal(17);
        });
        it('tests get VAT', () => {
            expect(instance.VAT).to.equal(20);
        });
        it('tests active', () => {
            expect(instance.active).to.be.true;
        });
    });
    describe('test setters', () => {
        let instance;
        beforeEach(function () {
            instance = new PaymentPackage('Diana', 17);
        });
        it('returns error message if the type of the input is not a string', () => {
            expect(() => new PaymentPackage(17, 17)).to.throw('Name must be a non-empty string');
        });
        it('returns error message if name is empty', () => {
            expect(() => new PaymentPackage('', 10)).to.throw('Name must be a non-empty string');
        });
        it('checks the correct name', () => {
            expect(instance.name).to.equal('Diana');
            instance.name = 'Pesho';
            expect(instance.name).to.equal('Pesho');
        });
        it('returns error message if the type of the value is incorrect', () => {
            expect(() => new PaymentPackage('Diana', '17')).to.throw('Value must be a non-negative number');
        });
        it('returns error message if the value is smaller than 0', () => {
            expect(() => new PaymentPackage('Diana', -17)).to.throw('Value must be a non-negative number');
        });
        it('returns correct value', () => {
            expect(instance.value).to.equal(17);
            instance.value = 50;
            expect(instance.value).to.equal(50);
            instance.value = 0;
            expect(instance.value).to.equal(0);
        });
        it('returns error message if VAT type is incorrect ', () => {
            expect(() => instance.VAT = 'Diana').to.throw('VAT must be a non-negative number');
        });
        it('returns error message if the VAT value is a negative number', () => {
            expect(() => instance.VAT = -100).to.throw('VAT must be a non-negative number');
        });
        it('returns currect value of VAT', () => {
            expect(instance.VAT).to.equal(20);
            instance.VAT = 30;
            expect(instance.VAT).to.equal(30);
        });
        it('returns error messages if active status is not boolean', () => {
            expect(() => instance.active = 'Diana').to.throw('Active status must be a boolean');
        });
        it('returns correct value', () => {
            expect(instance.active).to.be.true;
            instance.active = false;
            expect(instance.active).to.be.false;
        });
    });
    describe('tests toString function', () => {
        let instance;
        beforeEach(function () {
            instance = new PaymentPackage('Diana', 17);
        });
        it('tests active state', () => {
            const output = [
                `Package: Diana`,
                `- Value (excl. VAT): 17`,
                `- Value (VAT 20%): ${17 * (1 + 20 / 100)}`
            ].join('\n');
            expect(instance.toString()).to.equal(output);
        });
        it('tests not active state', () => {
            const output = [
                `Package: Diana (inactive)`,
                `- Value (excl. VAT): 17`,
                `- Value (VAT 20%): ${17 * (1 + 20 / 100)}`
            ].join('\n');
            instance.active = false;
            expect(instance.toString()).to.equal(output);
        });
    });
});