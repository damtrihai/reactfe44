import React, { Component } from "react";
import SanPhamRedux from "./SanPhamRedux";

export default class DanhSachSanPhamRedux extends Component {
  renderSanPham = () => {
    let { sanPham } = this.props;

    return sanPham.map((sanPham, index) => {
      return (
        <div key={index} className="col-4">
          <SanPhamRedux sanPham={sanPham} />
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
