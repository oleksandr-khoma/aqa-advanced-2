function recursionExample(num) {
  console.log(num);

  if (num > 0) {
    num--;
    recursionExample(num);
  }
}

recursionExample(5);
