import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Home from '../pages/css/home.css';
function NavbarComp() {
  return (
    <div>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="home.html" id="logo">Timely</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" class="justify-content-end" id="navbarScroll">
                <Nav  as="ul">
                    <Nav.Item as="li">
                        <a className="nav-link" href="about.html">About</a>
                    </Nav.Item>
                    <div className="navbar-nav align-items-end">
                    <a href="#myModal" class="cardLink" data-bs-toggle="modal" data-bs-target="#myModal" >
                        <button type="button" class="btn btn-primary" href="home.html">
                            Sign Up
                        </button>
                    </a>
                </div>
                  
                </Nav>
       
                </div>
            </div>
        </Nav>
    </div>
  )
}

export default NavbarComp