import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/QU-Logo.png";
// import UsersDataService from "./service/users.service";
import "./styles/login.css";
import axios from "axios";
import background from "./images/login-background.png";
import auth from "./service/authService";


//import auth from "./service/authService";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
    this.state = {
      data: {
        username: "",
        password: "",
      },
      invalid: false,
      user: null,
      type: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { user } = this.props;

    if (this.state.type === null) {
      return (
        <div>
          <header
            className="App-header"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="fade-in">
              <div className="login-container">
                <div class="row">
                  <div class="col">
                    <img id="logo" src={logo}></img>
                  </div>
                </div>
                <div id="form" class="container">
                  <hr
                    style={{
                      width: "100%",
                      color: "black",
                      marginBottom: "0px",
                    }}
                  ></hr>
                  <div class="row">
                    <div class="col">
                      {this.state.invalid === true ? (
                        <div>
                          <h5 id="pass" style={{ color: "red" }}>
                            Invalid login
                          </h5>
                        </div>
                      ) : null}
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label>Email address</label>
                          <input
                            id="inputs"
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(event, newValue) =>
                              this.setState({ username: event.target.value })
                            }
                          />
                        </div>

                        <div className="form-group">
                          <label>Password</label>
                          <input
                            id="inputs"
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(event, newValue) =>
                              this.setState({ password: event.target.value })
                            }
                          />
                        </div>

                        <button
                          id="signinbtn"
                          type="submit"
                          className="btn btn-danger"
                        >
                          Sign In
                        </button>
                      </form>
                      <button
                        id="createaccount"
                        type="submit"
                        className="btn btn-secondary"
                        onClick={this.handleClick}
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      );
    } else if (this.state.type === "student") {
      return <StudentPage {...this.state.user} />;
    } else if (this.state.type === "faculty") {
      return <FacultyPage {...this.state.user} />;
    } else if (this.state.type === "create") {
      return <CreateAccount {...this.state.user} />;
    }
  }

  handleClick = async (event) => {
    this.setState({ type: "create" });
  };

  handleSubmit = async (event) => {
    /* try{
        const { data } = this.state;
        await auth.login(data.email, data.password);
        const user = auth.getCurrentUser();
        console.log(user);
      } */
    event.preventDefault();
    console.log(
      "handle submit: " +
        this.state.username +
        " and " +
        this.state.password +
        " and user type? " +
        this.state.userType
    );
    let user = {
      username: this.state.username,
      password: this.state.password,
    };
    let received = await axios
      .post("http://localhost:8080/users/login", user)
      .catch((error) => {
        console.error(error);
      });
    //let user = await auth.login(d.email, d.pass);
    // auth.loginWithJwt(response.headers["x-access-token"]);
    //const user = auth.getCurrentUser();
    // console.log("user is = " + received.data);
    if (received) {
      auth.loginWithJwt(received.data.token);
      auth.setUserID(received.data.id);
      auth.setUserType(received.data.userType);
      this.setState({
        invalid: false,
        user: received.data,
      });
      if (received.data.userType === "STUDENT") {
        console.log("Going to student page!");

        this.setState({ type: "student" });
      } else if (received.data.userType === "FACULTY") {
        console.log("Going to faculty page!");
        this.setState({ type: "faculty" });
      }
    } else {
      this.setState({
        invalid: true,
      });
    }
  };
}

export default Login;