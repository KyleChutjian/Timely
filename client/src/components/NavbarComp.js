import React, {useState, useRef, useEffect} from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Modal} from 'react-bootstrap';
import { faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Home from '../pages/css/home.css';
import axios from 'axios';
import { Link } from "react-router-dom";

import { signup, getAllCourses} from '../service/userService';

import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;




function NavbarComp() {
  // let coursesArray = [];
  // const [courses, setCourses] = useState([]);
  // const fetchCourses = async () => {
  //   const data = await getAllCourses();
  //   //console.log(data.data[0].name);
    
  //   // console.log(data.data[0].name);
  //   for (const course in data.data) {
  //     //console.log(data.data[course]);
  //     coursesArray.push(data.data[course].name);
      
  //   }
  //   return coursesArray.map((course,index) => {
  //     return <li><input type="checkbox" checked="false"/> {coursesArray[index]}</li>
  //   })
  //   //console.log(coursesArray);
    
  //   //return coursesArray;
  // }

  const [courses, setCourses] = useState([]);

  useEffect(() => {
      getAllCourses().then((res) => {
        const data = res.data;
        setCourses(data);
      });
 
  }, []);
  console.log(courses);







 
  
  const navigator = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [account, setAccount] = useState({
      email: "",
      password: "",
      isProfessor: false,
    });
    function handleChange(e) {
      console.log(e.currentTarget.value);
      const { name, value } = e.target;
      setAccount((prev) => {
          return {
            ...prev,
            [name]: value,
          };
      })
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(account);
    signup(account)
    .then((res) => {
      //update the route
      console.log(JSON.stringify(res));
      navigator("/");
      handleClose();
  })
  
    .catch((err) => console.log(err));
};



  return (
    <div>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
            <div className="container-fluid">
            <Link to="/dashStudent">
                <a className="navbar-brand" href="home.html" id="logo">Timely</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
                <Nav  as="ul">
                    <Nav.Item as="li">
                        <a className="nav-link" href="/">Home</a>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <button type="button" className="btn btn-primary" onClick={handleShow}
                   
                        
                            >
                            Sign up
                        </button>
                        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="formModal" action="" method="" onSubmit={(e)=>handleSubmit(e)}>
               <div className="row">

               </div>
                 <div className="form-group">
                     <label>Quinnipiac Email:</label>
                     <input type="text" className="form-control" id="username" placeholder="Enter Quinnipiac Email" required name="email" onChange={handleChange}
                 
                     />
                     <div className="invalid-feedback">Enter a valid Username.</div>
                 </div>
                 <div className="form-group">
                     <label>Password:</label>
                     <input type="password" className="form-control" id="password" placeholder="Enter Password" required
                     name='password' onChange={handleChange}
                     />
                     <div className="invalid-feedback">Enter a valid Password.</div>
                 </div>
                 <div className="form-group">
                  <label>Confirm Password:</label>
                  <input type="password" className="form-control" id="passwordConfirm" placeholder="Confirm Password" required name="password" onChange={handleChange}/>
                  <div className="invalid-feedback">Password Doesn't Match.</div>
                  <div className="dropdown-check-list" tabIndex="100">
  <span className="anchor">Select Courses</span>
  <div id="list1">
  <ul className="items">
    <li><input type="checkbox" />SER-320 </li>
    <li><input type="checkbox" />ENR-110</li>
    <li><input type="checkbox" />SER-330 </li>
    <li><input type="checkbox" />ENR-210 </li>
    <li><input type="checkbox" />SER-210 </li>
    <li><input type="checkbox" />ME-210 </li>
    <li><input type="checkbox" />CE-210</li>
  </ul>
</div>
</div>




                
              </div>
                 <button type="submit" className="btn1 btn-primary btn-block" data-bs-dismiss="modal">Sign Up</button>
             </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
        
                      
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