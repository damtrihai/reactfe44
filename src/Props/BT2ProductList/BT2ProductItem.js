import React, { Component } from "react";

export default class BT2ProductItem extends Component {
  render() {
    let { name, price, image } = this.props.item;
    return (
      <div className="card">
        <img width={200} height={400} className="card-img-top" src={image} alt="123" />
        <div className="card-body" style={{ fontSize: 20, fontWeight: "bold" }}>
          <h4 className="card-title" style={{ height: 40 }}>
            {name}
          </h4>
          <p className="card-text" style={{ height: 40 }}>
            {price}$
          </p>
          <button className="btn " style={{ background: "#000", color: "#fff" }}>
            Add to card
          </button>
        </div>
      </div>
    );
  }
}
