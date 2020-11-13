import React, { Component } from "react"
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
      clicked :false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    const response = {data : 'swanand', email:'swanand@gmail'}

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    this.setState(
      {
        clicked : true
      }
    )

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        this.props.handleSuccessfulAuth(data);
      },

      onFailure: err => {
        this.setState(
          {
            clicked : false
          }
        )
        console.log("onFailure:", err);
      },

      newPasswordRequired: data => {
        this.setState(
          {
            clicked : false
          }
        )
        console.log("newPasswordRequired:", data);
      }
    });
    event.preventDefault();

  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} className="form" >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">
          {this.state.clicked ? <i class="fa fa-spinner fa-spin"/> : null}Login</button>
        </form>
      </div>
    );
  }
}