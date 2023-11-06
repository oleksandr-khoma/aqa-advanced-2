async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();
  return todo;
}

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  return user;
}

const fetchDataAll = async () => {
  const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
  console.log(todo);
  console.log(user);
};

const fetchDataRace = async () => {
  const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
  console.log(firstResult);
};

fetchDataAll();
fetchDataRace();
