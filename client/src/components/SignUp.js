// import React, {useState, useRef, useEffect} from 'react';
// import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Modal} from 'react-bootstrap';
// import { signup } from '../service/userService';
// import { useNavigate } from "react-router-dom";


// function SignUp (){
//     const navigator = useNavigate();

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const [account, setAccount] = useState({
//       email: "",
//       password: "",
//       isProfessor: false,
//     });
//     function handleChange(e) {
//       console.log(e.currentTarget.value);
//       const { name, value } = e.target;
//       setAccount((prev) => {
//           return {
//             ...prev,
//             [name]: value,
//           };
//       })
//   };
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(account);
//     signup(account)
//     .then((res) => {
//       //update the route
//       console.log(JSON.stringify(res));
//       navigator("/dash");
//       handleClose();
//   })
  
//     .catch((err) => console.log(err));
// };

//     return (
//         <div >
//         <button type="button" className="btn btn-primary" onClick={handleShow}
                   
                        
//                             >
//                             Sign up
//                         </button>
//         <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Sign Up!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form className="formModal" action="" method="" onSubmit={(e)=>handleSubmit(e)}>
//                <div className="row">

//                </div>
//                  <div className="form-group">
//                      <label>Quinnipiac Email:</label>
//                      <input type="text" className="form-control" id="username" placeholder="Enter Quinnipiac Email" required name="email" onChange={handleChange}
                 
//                      />
//                      <div className="invalid-feedback">Enter a valid Username.</div>
//                  </div>
//                  <div className="form-group">
//                      <label>Password:</label>
//                      <input type="password" className="form-control" id="password" placeholder="Enter Password" required
//                      name='password' onChange={handleChange}
//                      />
//                      <div className="invalid-feedback">Enter a valid Password.</div>
//                  </div>
//                  <div className="form-group">
//                   <label>Confirm Password:</label>
//                   <input type="password" className="form-control" id="passwordConfirm" placeholder="Confirm Password" required name="password" onChange={handleChange}/>
//                   <div className="invalid-feedback">Password Doesn't Match.</div>
//               </div>
//                  <button type="submit" className="btn1 btn-primary btn-block" data-bs-dismiss="modal">Sign Up</button>
//              </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <button variant="secondary" onClick={handleClose}>
//             Cancel
//           </button>
//         </Modal.Footer>
//       </Modal>
//       </div>
//     )
//   }


// export default SignUp