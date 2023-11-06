function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => response.json()
  );
}

const promise1 = fetchTodo();
const promise2 = fetchUser();

Promise.all([promise1, promise2]).then((results) => {
  console.log(results);
});

Promise.race([promise1, promise2]).then((result) => {
  console.log(result);
});
