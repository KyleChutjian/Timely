import { useState, Container, Wrapper, Title, Form, Input, Button, Error, Link } from "react";

import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

function Login  ()  {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
  
    const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
    };
    return (
      <div className="container">
        <div className="wrapper">
          <h1>SIGN IN</h1>
          <form>
            <input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </button>
            {error && <error>Something went wrong...</error>}
            <link>DO NOT YOU REMEMBER THE PASSWORD?</link>
            <link>CREATE A NEW ACCOUNT</link>
          </form>
        </div>
      </div>
    );
  };

  export default Login;