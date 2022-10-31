import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import { StoreProvider, useStore } from "store/store";

import "./index.css";

const App = () => {
  const {count, increment} = useStore();
  return (
    <div className="container">
      <h1> this is a PDP project base</h1>
      <Header />
      <div>Count: {count}</div>
      <div>
        <button onClick={increment}>Add To Cart</button>
      </div>
    </div>
  )
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);