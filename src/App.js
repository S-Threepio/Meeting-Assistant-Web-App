import React, { Component, useRef, useState } from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";

export default class App extends Component{
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    // axios
    //   .get("http://localhost:3001/logged_in", { withCredentials: true })
    //   .then(response => {
    //     if (
    //       response.data.logged_in &&
    //       this.state.loggedInStatus === "NOT_LOGGED_IN"
    //     ) {
    //       this.setState({
    //         loggedInStatus: "LOGGED_IN",
    //         user: response.data.user
    //       });
    //     } else if (
    //       !response.data.logged_in &
    //       (this.state.loggedInStatus === "LOGGED_IN")
    //     ) {
    //       this.setState({
    //         loggedInStatus: "NOT_LOGGED_IN",
    //         user: {}
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     console.log("check login error", error);
    //   });
    this.setState({
              loggedInStatus: "LOGGED_IN",
              user: {name:'swanand',email:'swanand@gmail'}
            });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}