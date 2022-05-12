
import React, {useState ,useEffect} from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Modal} from 'react-bootstrap';
import HomeCss from '../pages/css/home.css';
import useScript from '../hooks/useScript';
import Joi from "joi-browser";
import { login } from '../service/authService';
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function Home () {
  const navigator = useNavigate();

  const [LoginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();

    console.log(LoginInfo);
    login(LoginInfo)
    .then((res) => {
        //update the route
        console.log(JSON.stringify(res));
        navigator("/dash");
    })
    .catch((err) => console.log(err));
};
function handleChange(e) {
  console.log(e.currentTarget.value);
  const { name, value } = e.target;
  setLoginInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
  })
};

  
  return (

    <div className="container-lg justify-content-center mainContainer d-block">
    <div className="row text-center ">
    <div className="col-lg-12">
          <h1 className="welcome">Introducing Timely!</h1>
          <h6 className="subWelcome">Easily track academic hours and gain insight on performance.</h6>
      </div>
    </div>
    <div className="row rowWithCard">
    <div className="col-lg-12 justify-content-center">
    <div className="card card-plain">
   
    <div className="card-body">
    <div className="tab-content text-center">
    <div className="tab-pane active" id="Student">
    <h4 className="logInToStartText">Welcome, Log In To Get Started</h4>
    <form className='logInForm' onSubmit={handleSubmit}>
      <div className='col-lg-12'>
        <div className='row-4'>
      <input className="emailInput" type="text" placeholder="Quinnipiac E-Mail" name="email" onChange={handleChange} 
    
      />
      </div>
      <div className='row-4'>
      <input className="passInput" type="text" placeholder="Password" name="password" onChange={handleChange}
    
      />
   
      </div>
      <div className='row-4'>
      <button type='submit' className='btn btn-primary'>Login</button>
          </div>
          
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
      </div>
    </div>
    </div>
  )
};


export default Home;