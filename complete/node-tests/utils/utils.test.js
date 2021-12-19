const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('Should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44);
            expect(typeof res).toBe('number');
        });
    });

    it('Should aync add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7);
            expect(typeof sum).toBe('number');
            done();
        });
    });

    it('Should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25);
            expect(typeof res).toBe('number');
            done();
        });
    });

    it('Should square a number', () => {
        var res = utils.square(3);

        expect(res).toBe(9);
        expect(typeof res).toBe('number');
    });
});

it('Should set firstName and lastName', () => {
    var user = {location: 'Philadelphia', age: 25};
    var res = utils.setName(user, 'Terence Huang');

    expect(res).toMatchObject({
        firstName: 'Terence',
        lastName: 'Huang'
    });
});