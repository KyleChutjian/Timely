
import React, {useState ,useEffect} from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Modal} from 'react-bootstrap';
import HomeCss from '../pages/css/home.css';
import useScript from '../hooks/useScript';
import Joi from "joi-browser";

import { useDispatch, useSelector } from "react-redux";

function Home () {

  const [username, setUsername] = useState("");

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
    <div className=" card-header nav-tabs-navigation">
    <ul className="nav nav-pills nav-justified" data-tabs="tabs">
                              <li className="nav-item">
                                  <a className="nav-link active studentPill" href="#Student" data-toggle="tab">Student</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link adminPill" href="#Admin" data-toggle="tab">Professor</a>
                              </li>
                          </ul>
    </div>
    <div className="card-body">
    <div className="tab-content text-center">
    <div className="tab-pane active" id="Student">
    <h4 className="logInToStartText">Welcome, Log In To Get Started</h4>
    <form className='logInForm'>
      <div className='col-lg-12'>
        <div className='row-4'>
      <input className="emailInput" type="text" placeholder="Quinnipiac E-Mail" 
    
      />
      </div>
      <div className='row-4'>
      <input className="passInput" type="text" placeholder="Password" 
    
      />
      <Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Check this switch if you are a professor"
  />
</Form>
      </div>
      <div className='row-4'>
      <Button className="loginBtn" variant="secondary">
            Log In
          </Button>
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