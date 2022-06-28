import React from "react";
import GlobalStyles from "./components/styles/GlobalStyles";

import DataSource from "./api/dataSource";
import { Header, Footer, Form, TodoList } from "./components";
import DataProvider from "./api/DataProvider";

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
    <DataProvider>
      <GlobalStyles>
        <Header />
        {/* <Form add={add} edit={edit} />
        <TodoList todos={todos} remove={remove} setDone={setDone} edit={edit} /> */}
        {/* <Form /> */}
        <TodoList />
        <Footer />
      </GlobalStyles>
    </DataProvider>
  );
};

export default App;
