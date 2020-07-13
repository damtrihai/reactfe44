import React, { Component } from "react";
import ProductComponet from "./ProductComponet";

export default class ProductListComponent extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <ProductComponet />
            <ProductComponet />
            <ProductComponet />
            <ProductComponet />
          </div>
        </section>
      </div>
    );
  }
}
