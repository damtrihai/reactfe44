import React, { Component } from "react";
import { connect } from "react-redux"; //Thư viện kết nối react Component và redux store

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img width={100} height={300} className="card-img-top" src={sanPham.hinhAnh} alt="123" />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.gia.toLocaleString()}</p>
          <button className="btn btn-danger mr-2">Xem chi tiết</button>
          <button
            onClick={() => {
              this.props.themGioHang(sanPham);
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

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      let spGH = {
        maSP: sanPhamClick.maSP,
        tenSP: sanPhamClick.tenSP,
        hinhAnh: sanPhamClick.hinhAnh,
        gia: sanPhamClick.gia,
        soLuong: 1,
      };
      let action = {
        type: "THEM_GIO_HANG", //Thuộc tính
        spGH: spGH,
      };
      //   Dùng hàm dispatch gửi giá trị lên reducer để set lại state
      dispatch(action);
      //   console.log(spGH);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);
