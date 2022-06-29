import React from "react";
import GlobalStyles from "./components/styles/GlobalStyles";

import DataSource from "./api/dataSource";
import { Header, TodoList, MainMenu, Form } from "./components";
import DataProvider from "./api/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <GlobalStyles>
        <Header />
        {/* <Form add={add} edit={edit} />
        <TodoList todos={todos} remove={remove} setDone={setDone} edit={edit} /> */}
        <Form />
        <MainMenu />
        <TodoList />
      </GlobalStyles>
    </DataProvider>
  );
};

export default App;
