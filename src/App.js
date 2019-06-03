import React from "react";
import "./config/ReactotronConfig";

import { Provider } from "react-redux";

import store from "./store";

import TodoList from "./store/TodoList";

console.tron.log("Oie");

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
