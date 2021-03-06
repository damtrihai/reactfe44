import React, { Component } from "react";

export default class ModalGH extends Component {
  renderGioHang = () => {
    let { giohang, xoaGioHang, tangGiamSoLuong } = this.props;
    return giohang.map((sanPhamGH, index) => {
      return (
        <tr key={index}>
          <td>{sanPhamGH.maSP}</td>
          <td>{sanPhamGH.tenSP}</td>
          <td>
            <img width="50" height="50" src={sanPhamGH.hinhAnh}></img>
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                tangGiamSoLuong(sanPhamGH.maSP, true);
              }}
            >
              +
            </button>
            {sanPhamGH.soLuong}
            <button
              className="btn btn-primary"
              onClick={() => {
                tangGiamSoLuong(sanPhamGH.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>{sanPhamGH.soLuong}</td>
          <td>{sanPhamGH.gia}</td>
          <td>{sanPhamGH.gia * sanPhamGH.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                xoaGioHang(sanPhamGH.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  tinhTongTien = () => {
    return this.props.giohang.reduce((tongTien, spGH, index) => {
      return (tongTien += spGH.soLuong * spGH.gia);
    }, 0);
  };

  render() {
    return (
      <div className="container">
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th></th>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Tổng tiền</td>
              <td>{this.tinhTongTien().toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
