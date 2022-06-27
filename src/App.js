import React, { useEffect, useState } from "react";
import DataSource from "./api/dataSource";
import GlobalStyles from "./components/styles/GlobalStyles";

import { Header, Footer, Form, TodoList } from "./components";

const App = () => {
  const [todos, setTodos] = useState([]);

  const dataSource = new DataSource();

  const add = (todo) => {
    setTodos(dataSource.Add(todo));
  };

  const remove = (id) => {
    console.log(id);
  };

  const edit = (todo) => {};

  const setDone = (done) => {};

  const getAllTodos = () => {
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
