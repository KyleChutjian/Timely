import React, { Component } from "react";
import Joi from "joi-browser";
class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };
  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    // console.log(this.state.email + " " + this.state.password);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={this.state.account.email}
              onChange={this.handleChange}
              id="email"
              aria-describedby="emailHelp"
            />
            {this.state.errors.email && (
              <div className="alert alert-danger">
                {" "}
                {this.state.errors.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={this.state.account.password}
              name="password"
              onChange={this.handleChange}
              type="text"
              className="form-control"
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {" "}
                {this.state.errors.password}
              </div>
            )}
            <button disabled={this.validate()} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
