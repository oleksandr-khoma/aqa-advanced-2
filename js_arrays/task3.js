const array = [10, 20, 30, 40, 50];

const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sumWithInitial);
