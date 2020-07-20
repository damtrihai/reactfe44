import React, { Component } from "react";

export default class SP extends Component {
  render() {
    let { sanPham, themGioHang } = this.props;

    return (
      <div className="card">
        <img width={100} height={300} className="card-img-top" src={sanPham.hinhAnh} alt="123" />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button
            // onClick={() => {
            //   xemCT(sanPham);
            // }}
            className="btn btn-danger mr-2"
          >
            Xem chi tiết
          </button>
          <button
            onClick={() => {
              themGioHang(sanPham);
            }}
            className="btn btn-success"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
