function countRectangleArea(width, height) {
  return width * height;
}

const countRectangleArea1 = function (width, height) {
  return width * height;
};

const countRectangleArea2 = (width, height) => {
  return width * height;
};

console.log(countRectangleArea(5, 10));
console.log(countRectangleArea1(5, 10));
console.log(countRectangleArea2(5, 10));
