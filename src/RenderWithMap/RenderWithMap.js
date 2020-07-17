import React, { Component } from "react";

export default class RenderWithMap extends Component {
  danhSachSanPham = [
    { maSP: 1, tenSP: "Iphone X", gia: 10000, hinhAnh: "https://picsum.photos/300/200" },
    { maSP: 2, tenSP: "Iphone XS", gia: 10000, hinhAnh: "https://picsum.photos/200/200" },
    { maSP: 3, tenSP: "Iphone XS Max", gia: 10000, hinhAnh: "https://picsum.photos/300/600" },
  ];

  renderTable = () => {
    // cách 2: dùng map
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td></td>
          <td></td>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.gia}</td>
          <td>
            <img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={100} height={100}></img>
          </td>
          <td>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      );
    });
  };
  //   cách 1
  // for (let index = 0; index < this.danhSachSanPham.length; index++) {
  //   let sanPham = this.danhSachSanPham[index];
  //   let trJXS = (
  //     <tr>
  //       <td></td>
  //       <td></td>
  //       <td>{sanPham.maSP}</td>
  //       <td>{sanPham.tenSP}</td>
  //       <td>{sanPham.gia}</td>
  //       <td>
  //         <img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={100} height={100}></img>
  //       </td>
  //       <td>
  //         <button className="btn btn-danger">Xóa</button>
  //       </td>
  //     </tr>
  //   );
  //   // push tr vào mảng jxs
  //   arrSPJXS.push(trJXS);
  // }

  render() {
    return (
      <div className="container">
        <h3 className="text-primary text-center">Danh mục sản phẩm</h3>
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Giá</th>
              <th>Hình Ảnh</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
