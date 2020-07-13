import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcImg: "./img/red-car.jpg",
  };
  changeColor = (newImgSrc) => {
    this.setState({
      srcImg: newImgSrc,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center">BÀI TẬP CHỌN XE</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.srcImg} alt="red-car.jpg"></img>
          </div>
          <div className="col-6">
            {/* <h3>Change Color</h3> */}
            <div className="row ">
              <div className="col-3">
                <button
                  style={{ backgroundColor: "gray" }}
                  className="btn btn-outline"
                  onClick={() => {
                    this.changeColor("./img/silver-car.jpg");
                  }}
                >
                  Silver Color
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ backgroundColor: "red" }}
                  className="btn"
                  onClick={() => {
                    this.changeColor("./img/red-car.jpg");
                  }}
                >
                  Red Color
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ backgroundColor: "black" }}
                  className="btn btn-outline text-white"
                  onClick={() => {
                    this.changeColor("./img/black-car.jpg");
                  }}
                >
                  Black Color
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ backgroundColor: "#150517" }}
                  className="btn btn-outline text-white"
                  onClick={() => {
                    this.changeColor("./img/Steel-car.jpg");
                  }}
                >
                  Steel Color
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
