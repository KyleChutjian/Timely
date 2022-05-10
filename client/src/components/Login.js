import React from 'react'
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="" id="loginScreen">
      <div id="j-tron" className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">Login to an Existing Account.</h1>
          <p className="lead">Please input an email and password to login into an existing account.</p>
        </div>
      </div>
        <form id="loginForm">
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">A Quinnipiac Email is required.</div>
          </div>
          <div id="password" className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword"/>
          </div>
          <div className="mb-3">
            <label href="" className="link-primary">
              <NavLink className="nav-link" to="/createAccount">
                Not an existing user? Create an account!
              </NavLink>
            </label>
          </div>
          <button type="submit" className="btn btn-dark">Login</button>
      </form>
    </div>
  )
}

export default Login