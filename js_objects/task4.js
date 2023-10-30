let person = {
  firstName: "Tim",
  lastName: "Cook",
  age: 51,
};

person.email = "tim_cook@icloud.com";
delete person.age;

console.log(person);
