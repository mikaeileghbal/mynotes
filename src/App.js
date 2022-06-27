import React, { createContext, useContext, useEffect, useState } from "react";
import GlobalStyles from "./components/styles/GlobalStyles";

import DataSource from "./api/dataSource";
import { Header, Footer, Form, TodoList } from "./components";

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

const TODOContext = ({ children }) => {
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

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, add, remove, edit, setDone }}>
      {children}
    </TodoContext.Provider>
  );
};

const App = () => {
  // const [todos, setTodos] = useState([]);

  // const dataSource = new DataSource();

  // const add = (todo) => {
  //   dataSource.Add(todo);
  //   getAllTodos();
  // };

  // const remove = (id) => {
  //   dataSource.Remove(id);
  //   getAllTodos();
  // };

  // const edit = (todo) => {};

  // const setDone = (done) => {};

  // const getAllTodos = () => {
  //   console.log("Loading data");
  //   setTodos(dataSource.GetAll());
  // };

  // useEffect(() => {
  //   getAllTodos();
  // }, []);

  return (
    <TODOContext>
      <GlobalStyles>
        <Header />
        {/* <Form add={add} edit={edit} />
        <TodoList todos={todos} remove={remove} setDone={setDone} edit={edit} /> */}
        <Form />
        <TodoList />
        <Footer />
      </GlobalStyles>
    </TODOContext>
  );
};

export default App;
