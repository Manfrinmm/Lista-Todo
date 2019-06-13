import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import TodoList from "./TodoList";

// import { Container } from './styles';

const App = () => (
  // Quem estiver dentro do Provider vai conseguir "compartilhar" as informações
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
