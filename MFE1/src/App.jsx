import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Counter from "./components/Counter";

const App = () => (
  <>
  <Counter/>
</>
);
ReactDOM.render(<App />, document.getElementById("app"));
