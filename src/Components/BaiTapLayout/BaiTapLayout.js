import React, { Component } from "react";
import BTHeader from "./BTHeader";
import SliderComponent from "./SliderComponent";
import ProductListComponent from "./ProductListComponent";
import FooterComponent from "./FooterComponent";
import LaptopComponent from "./LaptopComponent";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <SliderComponent />
        <ProductListComponent />
        <LaptopComponent />
        <FooterComponent />
      </div>
    );
  }
}
