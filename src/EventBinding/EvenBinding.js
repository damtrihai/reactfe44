import React, { Component } from "react";

export default class EvenBinding extends Component {
  handleClick = () => {
    alert("Hello FE44");
  };
  showMessage = (message) => {
    alert("Hello" + message);
  };
  render() {
    return (
      <div>
        <h3>Cách 1 handle event</h3>
        {/* cách 1 truyền trực tiếp callback function */}
        <button onClick={this.handleClick}>Click me!!</button>
        <button onClick={this.showMessage.bind(this, " Hải")}>Click me!!</button>

        <h3>Cách 2 handle event</h3>
        {/* cách 2 truyền function gián tiếp */}
        <button onClick={() => this.handleClick()}>Click me!!</button>
        <button onClick={() => this.showMessage(" Hào gà")}>Click me!!</button>
      </div>
    );
  }
}
