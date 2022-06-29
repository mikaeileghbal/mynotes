import React, { createContext, useContext, useEffect, useState } from "react";
import DataSource from "./dataSource";

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const dataSource = new DataSource();

  const add = (todo) => {
    dataSource.Add(todo);
    getAllTodos();
  };

  const remove = (id) => {
    dataSource.Remove(id);
    getAllTodos();
  };

  const edit = (todo) => {};

  const setDone = (done) => {};

  const getAllTodos = () => {
    console.log("Loading data");
    setTodos(dataSource.GetAll());
  };

  const searchTodo = (term) => {
    setTodos(dataSource.SearchTodo(term));
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, add, remove, edit, setDone, searchTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default DataProvider;
