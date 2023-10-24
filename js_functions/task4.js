function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed");
  } else if (isNaN(numerator)) {
    throw new Error("Numerator is not a number");
  } else if (isNaN(denominator)) {
    throw new Error("Denominator is not a number");
  }
  return numerator % denominator;
}

const divideConditions = [
  [10, 3],
  ["a", 3],
  [10, "b"],
  [10, 0],
];

for (let i = 0; i < divideConditions.length; i++) {
  try {
    console.log(divide(divideConditions[i][0], divideConditions[i][1]));
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Work is done");
  }
}
