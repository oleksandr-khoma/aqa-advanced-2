const averageGrade = Math.floor(Math.random() * 100) + 1;

switch (true) {
  case averageGrade < 60:
    console.log(`Оцінка ${averageGrade}: Незадовільно`);
    break;
  case averageGrade <= 70:
    console.log(`Оцінка ${averageGrade}: Задовільно`);
    break;
  case averageGrade <= 80:
    console.log(`Оцінка ${averageGrade}: Добре`);
    break;
  case averageGrade <= 90:
    console.log(`Оцінка ${averageGrade}: Дуже добре`);
    break;
  case averageGrade >= 91:
    console.log(`Оцінка ${averageGrade}: Відмінно`);
    break;
}
