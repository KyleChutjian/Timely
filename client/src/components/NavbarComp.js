import React, {useState} from 'react';
import Modal from './modal/Modal';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Home from '../pages/css/home.css';
function NavbarComp() {

    const [openModal, setOpenModal] = useState(false);

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
                    <Nav.Item as="li">
                        <button type="button" className="btn btn-primary"
                   
                        
                            >
                            Sign up
                        </button>
                        {openModal && <Modal />}
                      
                        {/* {openModal && <Modal  />} */}

                    </Nav.Item>
                
                  
                </Nav>
       
                </div>
            </div>
        </Nav>
    </div>
  )
}

export default NavbarComp