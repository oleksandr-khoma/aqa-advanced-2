const users = [
  { name: "Matthew", email: "matthew@yahoo.fr", age: 45 },
  { name: "Linda", email: "linda@outlook.be", age: 33 },
  { name: "Scott", email: "scott@gmail.com", age: 21 },
];

for (const { name, email, age } of users) {
  console.log(
    `User with name ${name} is ${age} years old and has email ${email}`
  );
}
