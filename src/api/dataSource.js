import data from "./initialData";
import { v4 } from "uuid";
import { isDataAvailable, loadFromStorage, saveToStorage } from "../helper";

let todos = isDataAvailable() ? loadFromStorage() : data;

function DataSource() {
  function saveData() {
    saveToStorage(todos);
  }

  this.GetAll = function () {
    return todos;
  };

  this.Add = function (todo) {
    todo.id = v4();
    todos = [...todos, todo];
    saveData();
  };

  this.Remove = function (id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveData();
  };

  this.Edit = function (todo) {
    todos = todos.map((t) => (t.id = todo.id ? todo : t));
    saveData();
  };

  this.SetDone = function (id, done) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: done } : todo
    );
    saveData();
  };
}

export default DataSource;
