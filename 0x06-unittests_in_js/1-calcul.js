function calculateNumber(type, a, b) {
  // Rounds two numbers and returns their sum.
  if (!["SUM", "SUBTRACT", "DIVIDE"].includes(type)) {
    process.exit(1);
  }

  const num1 = Math.round(a);
  const num2 = Math.round(b);

  if (type === "SUM") {
    return num1 + num2;
  }
  if (type === "SUBTRACT") {
    return num1 - num2;
  }
  if (type === "DIVIDE") {
    if (num2 === 0) {
      // Division by zero
      return "Error";
    }
    return num1 / num2;
  }
}

module.exports = calculateNumber;
