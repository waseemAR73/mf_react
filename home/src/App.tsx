import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";

import "./index.css";

const App = () => (
    <div className="container">
      <Header />
      Home app
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
