import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./Components/DemmoComponents/Demo";
import DemoClass from "./Components/DemmoComponents/DemoClass";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import Databinding from "./Databinding/Databinding";

function App() {
  return (
    <div className="App">
      <Databinding />
      <p className="title">Hello</p>
    </div>
  );
}

export default App;
