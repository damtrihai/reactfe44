import React, { Component } from "react";
import Child from "./Child";

export default class DemoProps extends Component {
  render() {
    let product = {
      id: 1,
      name: "IphoneX",
      price: 1000000,
      image: "./img/applephone.jpg",
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Child productProps={product} />
          </div>
        </div>
      </div>
    );
  }
}
