import React, { Component } from "react";
import cssDatabinding from "./Databinding.module.css";

export default class Databinding extends Component {
  //ngoài render là thuộc tính, trong là biến(có let)
  name = "HaLongBay";
  img =
    "https://innotour.vn/wp-content/uploads/2017/11/phong-canh-dep-2-814x478.jpg";
  // Phương thức
  renderImg = () => {
    return (
      <div className="card">
        <img className="card-img-top" src={this.img} alt="123" />
      </div>
    );
  };
  render() {
    // binding biến
    let title = "CYBERSOFT-FE44";
    let srcimg =
      "https://andromeda.vn/data/images/hinh-anh-tranh-phong-canh-dep_093819984.jpg";
    // binding hàm
    let renderText = () => {
      // Trả về chuỗi hoặc số hoặc đoạn html react(jsx)
      return (
        <div>
          <h1 className="title">Hello</h1>
        </div>
      );
    };
    let obStyle = { fontWeight: "bold" };
    return (
      <div>
        <h1 style={obStyle} className={cssDatabinding.title}>
          {title}
        </h1>
        {renderText()}
        <img src={srcimg} alt="123"></img>
        <h1 className="title">{this.name}</h1>
        {this.renderImg()}
      </div>
    );
  }
}
