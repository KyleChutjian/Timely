import React, {useState, useRef, useEffect} from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Modal} from 'react-bootstrap';
import { faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Home from '../pages/css/home.css';
import axios from 'axios';
import { signup } from '../service/userService';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;




function NavbarComp() {
    // const userRef = useRef();
    // const errRef = useRef();

    // const [user,setUser] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);

    // const [pwd, setPwd] = useState('');
    // const [validPwd, setValidPwd] = useState(false);
    // const [pwdFocus, setPwdFocus] = useState(false);

    // const [matchPwd, setMatchPwd] = useState('');
    // const [validMatch, setValidMatch] = useState(false);
    // const [matchFocus, setMatchFocus] = useState(false);

    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(()=> {
    //   userRef.current.focus();
    // },[])

    // useEffect(()=> {
    //   const result = USER_REGEX.test(user);
    //   console.log(result);
    //   console.log(user);
    //   setValidName(result);
    // }, [user])

    // useEffect(() =>{
    //   const result = PWD_REGEX.test(pwd);
    //   console.log(result);
    //   console.log(pwd);
    //   setValidPwd(result);
    //   const match = pwd === matchPwd;
    //   setValidMatch(match);
    // }, [pwd, matchPwd])

    // useEffect(()=>{
    //   setErrMsg('');
    // },[user,pwd,matchPwd])

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
  })
  
    .catch((err) => console.log(err));
};

  return (
    <div>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="home.html" id="logo">Timely</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
                <Nav  as="ul">
                    <Nav.Item as="li">
                        <a className="nav-link" href="about.html">About</a>
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