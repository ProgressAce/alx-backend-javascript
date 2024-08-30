const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('CalculateNumber function', function() {
    describe('Value validation for the "type" arg.', function() {
        it('returns undefined if "type" is not: ' +
           'SUM, SUBTRACT or DIVIDE', function() {
            const result = calculateNumber('ABACUS', 4, 4);
            assert.equal(result, undefined);
        });
    });

    describe('Addition functionality', function() {
        it('returns the sum of two integers.', function() {
            const result = calculateNumber('SUM', 4, 4);
            assert.equal(result, 8);
        });

        it('rounds off both numbers and returns the sum ' +
           'of two numbers.', function() {
            const result = calculateNumber('SUM', 4.6, 2.49);
            assert.equal(result, 7);
        });

        it('adds two negative numbers.', function() {
            const result = calculateNumber('SUM', -6.9, 4.3);
            assert.equal(result, -3);
        });
    });

    describe('Subtraction functionality', function() {
        it('subtracts positive numbers.', function() {
            const result = calculateNumber('SUBTRACT', 4, 4);
            assert.equal(result, 0);
        });

        it('rounds off both numbers and returns the subtraction ' +
           'of two numbers.', function() {
            const result = calculateNumber('SUBTRACT', 4.6, 2.49);
            assert.equal(result, 3);
        });

        it('subtracts negative numbers.', function() {
            const result = calculateNumber('SUBTRACT', -4, 6);
            assert.equal(result, -10);
        });
    });

    describe('Division functionality', function() {
        it('divides positive numbers.', function() {
            const result = calculateNumber('DIVIDE', 5.2, 6.5);
            assert.equal(result, 0.7142857142857143);
        });

        it('rounds off both numbers and returns the division ' +
           'of two numbers.', function() {
            const result = calculateNumber('DIVIDE', 7.2, 4.49);
            assert.equal(result, 1.75);
        });

        it('divides negative numbers.', function() {
            const result = calculateNumber('DIVIDE', -6.2, 1.5);
            assert.equal(result, -3);
        });

        it('handles the case of the second number being 0.\n' +
           '(division by zero is handled).', function() {
            const result = calculateNumber('DIVIDE', -6.2, 0);
            assert.equal(result, "Error");
        });
    });
});
