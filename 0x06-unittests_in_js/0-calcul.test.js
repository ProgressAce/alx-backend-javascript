const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber function', function() {
    it('adds positive integers correctly', function() {
        const result = calculateNumber(4, 4);
        assert.equal(result, 8);
    });

    it('adds negative integers correctly', function() {
        const result = calculateNumber(-4, 6);
        assert.equal(result, 2);
    });

    describe('the function, focuses on the rounding aspect.', function() {
        it('rounds floating points correctly', function() {
            const result = calculateNumber(5.2, 6.5);
            assert.equal(result, 12);
        });

        it('rounds decimals with more than one place, correctly', function() {
            const result = calculateNumber(7.2, 4.49);
            assert.equal(result, 11);
        });

        it('rounds negative floats as normal', function() {
            const result = calculateNumber(-6.2, 1.5);
            assert.equal(result, -4);
        });
    });
});
