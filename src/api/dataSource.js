import data from "./initialData";

const todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos").toString())
  : data;

let nextId = 5;

function DataSource() {
  this.GetAll = function () {
    return todos;
  };

  this.Add = function (todo) {
    todo.id = nextId++;
    console.log(todo);
    return localStorage.setItem("todos", JSON.stringify(todos.concat(todo)));
  };

  this.Remove = function (id) {
    return todos.filter((todo) => todo.id !== id);
  };

  this.Edit = function (todo) {};

  this.SetDone = function (id, done) {
    return todos.map((todo) =>
      todo.id === id ? { ...todo, done: done } : todo
    );
  };
}

export default DataSource;
