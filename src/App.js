import React, { useEffect, useState } from "react";
import DataSource from "./api/dataSource";
import GlobalStyles from "./components/styles/GlobalStyles";

import { Header, Footer, Form, TodoList } from "./components";

const App = () => {
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
    <GlobalStyles>
      <Header />
      <Form add={add} edit={edit} />
      <TodoList todos={todos} remove={remove} setDone={setDone} edit={edit} />
      <Footer />
    </GlobalStyles>
  );
};

export default App;
