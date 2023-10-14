const randomNumber = Math.floor(Math.random() * 10) + 1;
let i = 1;

while (i <= 10) {
  console.log(`${randomNumber} x ${i} = ${randomNumber * i}`);
  i++;
}
