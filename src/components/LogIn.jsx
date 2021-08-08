import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import "./style-login.css";
// import ToDoList from "./ToDoList";

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // tạo delay
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100); // tạo delay
//   },
// };
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accName: "",
      accPass: "",
      acc: [
        { name: "tu", pass: "123" },
        { name: "lam", pass: "456" },
        { name: "pro", pass: "789" },
      ],
      check: "",
    };
  }
  // const [redirectToReffer, setRedirectToReffer] = useState(false)
  checkAccount = (e) => {
    e.preventDefault();
    var currentAcc = { name: this.state.accName, pass: this.state.accPass };
    const account = this.state.acc.filter((account) => {
      return (
        account.name === currentAcc.name && account.pass === currentAcc.pass
      );
    });
    if (account.length !== 0) {
      localStorage.setItem("name", account[0].name); //lưu vào context api
      this.setState({ check: "" });
    } else {
      this.setState({ check: "lỗi" });
    }
  };
  checkAccountName = (e) => {
    e.preventDefault();
    this.setState({ accName: e.target.value });
  };
  checkAccountPass = (e) => {
    e.preventDefault();
    this.setState({ accPass: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        <form>
          <div className="content">
            <h2>ĐĂNG NHẬP</h2>
            <div className="divLogIn">
              <table>
                <tr>
                  <th>Tên tài khoản:</th>
                  <td>
                    <input type="text" onChange={this.checkAccountName}></input>
                  </td>
                </tr>
                <tr>
                  <th>Mật khẩu:</th>{" "}
                  <td>
                    <input type="text" onChange={this.checkAccountPass}></input>
                  </td>
                </tr>
                <td>
                  <button
                    onClick={this.checkAccount}
                    className="btn btn-outline-primary"
                  >
                    Đăng nhập
                  </button>
                </td>
                <td>
                  <span id="error">{this.state.check}</span>
                </td>
              </table>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
