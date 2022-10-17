const Calc = require('../test/calc');

describe('unit13', function() {
    const calc = new Calc();

    describe('Add', function(){
        it('Should be equal 20 when 16 is added to 4', function(){
            assert.equal(calc.add(16, 4), 20);
        });
    });

    describe('Multiply', function() {
        it('Should be equal 15 when 5 is multiplyed by 3', function(){
            assert.equal(calc.multiply(5, 3), 15);
        });
    });
});