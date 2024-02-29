function calculateNumber(a, b) {
  // Rounds two numbers and returns their sum.
  const num1 = Math.round(a);
  const num2 = Math.round(b);

  return num1 + num2;
}

module.exports = calculateNumber;
