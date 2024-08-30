/**
 * Performs calculations on two numbers accrording to the given operation.
 * 
 * a and b are assumed to always be numbers, without validating it.
 * @param {string} type the operation to perform on `a` and `b`.
 * @param {number} a first number
 * @param {number} b second number
 * @returns a + b; a - b; a / b
 * (one of these operations)
 */
function calculateNumber(type, a, b) {
    // try/catch can be used
    a = Math.round(a);
    b = Math.round(b);

    // ADDITION of a and b
    if (type === 'SUM') {
        return a + b;
    }

    // SUBTRACTION of a and b
    if (type === 'SUBTRACT') {
        return a - b;
    }

    // DIVISION of a and b
    if (type === 'DIVIDE') {
        if (b === 0) return 'Error'; //

        return a / b;
    }

    return;
}

module.exports = calculateNumber;
