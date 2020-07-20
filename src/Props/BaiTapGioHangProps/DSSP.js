import React, { Component } from "react";
import SP from "./SP";

export default class DSSP extends Component {
  renderSanPham = () => {
    let { sanPham, themGioHang } = this.props;

    return sanPham.map((sanPham, index) => {
      return (
        <div key={index} className="col-4">
          <SP themGioHang={themGioHang} sanPham={sanPham} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center text-success mt-4 mb-4">Danh sách sản phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
