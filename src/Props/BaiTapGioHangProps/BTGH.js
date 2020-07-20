import React, { Component } from "react";
import ModalGH from "./ModalGH";
import DSSP from "./DSSP";

export default class BTGH extends Component {
  // xác định state giohang tại component: BTGH vì có chứa nút thêm giỏ hàng
  // và giao diện giỏ hàng
  state = {
    giohang: [],
  };

  themGioHang = (sanPhamClick) => {
    console.log(sanPhamClick);
    // từ sản phẩm được click tạo ra sản phẩm giỏ hàng
    let spGioHang = {
      maSP: sanPhamClick.maSP,
      tenSP: sanPhamClick.tenSP,
      hinhAnh: sanPhamClick.hinhAnh,
      gia: sanPhamClick.giaBan,
      soLuong: 1,
    };
    // Định nghĩa hàm thay đổi state tại nơi chứa state

    // tạo giỏ hàng mới
    let gioHangCapNhat = [...this.state.giohang];
    // Kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
    let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === spGioHang.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }
    // Cập nhật giỏ hàng cũ bằng phương thức setState
    this.setState({ giohang: gioHangCapNhat });
  };

  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  render() {
    return (
      <div>
        <DSSP themGioHang={this.themGioHang} sanPham={this.arrProduct} />
        <ModalGH giohang={this.state.giohang} />
      </div>
    );
  }
}
