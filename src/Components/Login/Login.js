import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { isAuthenticated, handleSubmit } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/todos" />;
    }

    return (
      <div>
        <form
          className="login"
          onSubmit={event => handleSubmit(event, this.state)}
        >
          <h2>Login</h2>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            placeholder="username"
          />
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            placeholder="password"
          />
          <input type="submit" />
        </form>

        <p>username is admin</p>
        <p>password is admin</p>
      </div>
    );
  }
}

export default Login;
