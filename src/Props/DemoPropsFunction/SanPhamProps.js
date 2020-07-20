import React, { Component } from "react";

export default class SanPhamProps extends Component {
  render() {
    let { sanPham } = this.props;
    let { xemCT } = this.props;
    return (
      <div className="card">
        <img width={100} height={400} className="card-img-top" src={sanPham.hinhAnh} alt="123" />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button
            onClick={() => {
              xemCT(sanPham);
            }}
            className="btn btn-danger"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
