const averageGrade = Math.floor(Math.random() * 100) + 1;

if (averageGrade < 60) {
  console.log(`Оцінка ${averageGrade}: Незадовільно`);
} else if (averageGrade <= 70) {
  console.log(`Оцінка ${averageGrade}: Задовільно`);
} else if (averageGrade <= 80) {
  console.log(`Оцінка ${averageGrade}: Добре`);
} else if (averageGrade <= 90) {
  console.log(`Оцінка ${averageGrade}: Дуже добре`);
} else if (averageGrade >= 91) {
  console.log(`Оцінка ${averageGrade}: Відмінно`);
}
