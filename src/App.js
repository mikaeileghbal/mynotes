import React from "react";
import GlobalStyles from "./components/styles/GlobalStyles";

import DataSource from "./api/dataSource";
import { Header, Footer, Form, TodoList } from "./components";
import DataProvider from "./api/DataProvider";
import MainMenu from "./components/MainMenu";

const App = () => {
  return (
    <DataProvider>
      <GlobalStyles>
        <Header />
        {/* <Form add={add} edit={edit} />
        <TodoList todos={todos} remove={remove} setDone={setDone} edit={edit} /> */}
        {/* <Form /> */}
        <MainMenu />
        <TodoList />
        <Footer />
      </GlobalStyles>
    </DataProvider>
  );
};

export default App;
