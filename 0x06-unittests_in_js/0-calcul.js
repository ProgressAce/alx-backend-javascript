/**
 * Sums two numbers after rounding them off.
 * @param {number} a
 * @param {number} b
 */
function calculateNumber(a, b) {
  a = Math.round(a);
  b = Math.round(b);

  return a + b;
}

module.exports = calculateNumber;
