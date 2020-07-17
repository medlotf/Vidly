import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(result);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validate();
    console.log("submm");
  };

  render() {
    const { username, password } = this.state.account;
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            type="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-success">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
