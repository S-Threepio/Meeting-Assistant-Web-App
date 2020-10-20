import React, { Component } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import './auth/Login.css';


export default class Home extends Component {
  constructor() {
    super();

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    // axios
    //   .delete("http://localhost:3001/logout", { withCredentials: true })
    //   .then(response => {
    //     this.props.handleLogout();
    //   })
    //   .catch(error => {
    //     console.log("logout error", error);
    //   });
    this.props.handleLogout();
  }

  render() {
    return (
      <div className="home-background">
        {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
        {/* <button onClick={() => this.handleLogoutClick()}>Logout</button> */}
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}