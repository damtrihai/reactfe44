import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./Components/DemmoComponents/Demo";
import DemoClass from "./Components/DemmoComponents/DemoClass";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import Databinding from "./Databinding/Databinding";
import EvenBinding from "./EventBinding/EvenBinding";
import HandleState from "./HandleState/HandleState";
import BaiTapChonXe from "./HandleState/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import EXRenderMap from "./RenderWithMap/EXRenderMap";
import DemoProps from "./Props/DemoProps";
import BT2ProductList from "./Props/BT2ProductList/BT2ProductList";
import DemoPropsFunction from "./Props/DemoPropsFunction/DemoPropsFunction";
import BTGH from "./Props/BaiTapGioHangProps/BTGH";
import BaiTapGioHangRedux from "./ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux";

function App() {
  return (
    <div className="App">
      {/* <Databinding /> */}
      {/* <BaiTapLayout /> */}
      {/* <p className="title">Hello</p> */}
      {/* <EvenBinding /> */}
      {/* <HandleState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <EXRenderMap /> */}
      {/* <DemoProps /> */}
      {/* <BT2ProductList /> */}
      {/* <DemoPropsFunction /> */}
      {/* <BTGH /> */}
      <BaiTapGioHangRedux />
    </div>
  );
}

export default App;
