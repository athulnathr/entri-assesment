import React from "react";
import Pages from "./Pages";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/styles/index.scss";
const App = () => {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
};

export default App;
