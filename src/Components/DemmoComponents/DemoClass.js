import React, { Component } from "react";

export default class DemoClass extends Component {
  // Mình có thể định nghĩa thêm các thuộc tính và phương thức khác

  // Phương thức render=> chứa nội dung giao diện
  render() {
    return (
      // Bên trong phương thức có thể khai báo biến
      <div>
        <div className="card text-left">
          <img className="card-img-top" src="holder.js/100px180/" alt />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
    );
  }
}
