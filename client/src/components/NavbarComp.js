import React, {useState, useRef, useEffect} from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Modal} from 'react-bootstrap';
import { faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Home from '../pages/css/home.css';
import axios from 'axios';
import { Link } from "react-router-dom";

import { signup, getAllCourses, enrollInCourse} from '../service/userService';

import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;




function NavbarComp() {
  
  //create courses const
  const [courses, setCourses] = useState([]);
  
  //get courses and put them in setCourses
  useEffect(() => {
      getAllCourses().then((res) => {
        const data = res.data;
        //create course array
        let courseArray = [];
        data.forEach((course) => {
          //populate array of course names
          courseArray.push(course);
          
        });
        setCourses(courseArray);
      });
 
  }, []);
  //console.log(courses);


 





 
  
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
  //submit new user with courses selected
  function handleSubmit(e) {
    e.preventDefault();
    console.log(account);
    signup(account)
    .then((res) => {
      //update the route
      console.log(JSON.stringify(res));
      console.log(res.data._id);
      CourseIdArray.forEach((courseId) => {
        enrollInCourse(res.data._id,courseId);
      })
      navigator("/");
      handleClose();
  })
  
    .catch((err) => console.log(err));
};
//make array for courses that user wants to join
const CourseIdArray = [];
//add courses to user id
function handleCourseChange (index) {
  if(CourseIdArray.includes(index)){
    CourseIdArray.splice(CourseIdArray.indexOf(index),1);
    console.log(CourseIdArray);
  }else{
    CourseIdArray.push(index);
    console.log(CourseIdArray);
  }
}
// Renders each option, from course array
const renderOptions = (courses, index) => {
  return (
    <div>
    {/* <option value={courses.id}>{courses.name}</option> */}
    
    <input type="checkbox" className="btn-check" id={index} autocomplete="off" value={courses.id} onChange={()=>{
      handleCourseChange(courses._id)
    }}/>
  <label className="btn btn-outline-primary mb-2" for={index}>{courses.name}</label>
  </div>
  );
}


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
    {/* create the dropdown for joining courses */}
 

<div className="btn-group-vertical" role="group" aria-label="Basic checkbox toggle button group">
{courses.map(renderOptions)}
</div>

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