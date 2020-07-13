import React, { Component } from "react";

export default class HandleState extends Component {
  // state: thuộc tính có sẵn của class Component => cho phép
  // thay đổi giá trị và render lại giao diện
  // tạo ra 2 thuộc tính
  // isLogin: nếu =true =>Hello hào
  // isLogin=false=>hiển thị nút đăng nhập
  state = {
    isLogin: false,
  };
  userName = "Hào";

  renderContent = () => {
    if (this.state.isLogin) {
      return <h1>Hello{this.userName}</h1>;
    }
    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        Đăng nhập
      </button>
    );
  };
  //   Định nghĩa phương thức xử lý sự kiện login
  login = () => {
    //Không gán giá trị các thuộc tính của state trực tiếp
    // this.state.isLogin = true;
    const newState = {
      isLogin: true,
    };
    // this.setState là phương thức có sẵn của component nhận vào state mới thay cho giá trị state cũ và tự động gọi lại hàm render
    this.setState(newState, () => {
      // tham số thứ 2 của hàm set State là callback chạy sau khi state thay đổi
      console.log(this.state.isLogin);
    });
  };

  render() {
    return <div> {this.renderContent()}</div>;
  }
}
