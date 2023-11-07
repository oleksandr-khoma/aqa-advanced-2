const greeting = new Promise((resolve) =>
  setTimeout(() => resolve("Hello world!"), 2000)
);

greeting.then((message) => {
  console.log(message);
});
