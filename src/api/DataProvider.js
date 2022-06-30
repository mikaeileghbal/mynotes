import React, { createContext, useContext, useEffect, useState } from "react";
import DataSource from "./dataSource";

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const dataSource = new DataSource();

  const add = (todo) => {
    dataSource.Add(todo);
    getAllTodos();
  };

  const remove = (id) => {
    dataSource.Remove(id);
    getAllTodos();
  };

  const edit = (todo) => {
    dataSource.Edit(todo);
    getAllTodos();
  };

  const setDone = (done) => {};

  const getAllTodos = () => {
    console.log("Loading data");
    setTodos(dataSource.GetAll());
  };

  const searchTermChange = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    console.log("cancel in provider...");
    setTodos(dataSource.SearchTodo(searchTerm));
  }, [searchTerm]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        searchTerm,
        add,
        remove,
        edit,
        setDone,
        searchTermChange,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default DataProvider;
