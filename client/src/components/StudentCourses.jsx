import React, {useState} from "react";
import { Button, Form, Modal} from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import {getAllLessons} from "../service/userService";
import { Card } from "react-bootstrap";
import CourseCard from "./courseCard";

function StudentCourses () {
    
  // TODO:
  // implement handleSubmit
  // Get Course Name, set it into State
  // get lessonmins,
  // do we need to log the time for other, assignments, studying?? that seems like a lot 
const { state: course } = useLocation();
const { state: user } = useLocation();
console.log(course[1]);
const [courseName, setCourseName] = useState(course[0])
const [lessonMins, setLessonMins] = useState(29)
const [numLessons, setNumLessons] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const onClick = () => setShow(true);

const onCreate = () => {
        handleClose()
}

// NEED TO IMPLEMENT - called at close of modal
const handleSubmit = () => {
 console.log("save to DB here")

setShow(false)
}


 // used for styling - makes component background fill height
const divStyle = {
  height: "100%"
};



// Renders each card, from card 1 to the end of the array of lessons
const renderCard = (card, index) => {
  return (
  <div className="card mb-3">
    <div className="col-lg-12 card-body d-lg-flex">
      <div className="col-lg-6 ">
        {/* get lesson number and populate into text */}
        <h5 className="mb-0 text-start">Lesson {card}</h5>
        {/* Get lesson minutes and populate into text */}
          <h6 className="mb-0 text-start">Time Logged: {lessonMins} minutes</h6>
      </div>
      <div className="col-lg-6">
            <button onClick={onClick} className=" btn btn-block w-100 btn-primary"type="button">Log Hours</button>
      </div>
    </div>
  </div>
  );
}

  return (
    <div className="bg-light" style={divStyle}>
      <div className="container row">
      
    <div className="container justify-content-center w-75">
      <h1 className="text-start mx-3 mt-4 lh-1 "><strong>{courseName}</strong></h1>
      <h4 className="text-start mx-3 lh-sm">Log hours for lessons in {courseName} as the semester goes on!</h4>
      <div className="row">
        <div className="col-lg-12 mx-2" >

          {numLessons.map(renderCard)}

          {/* <div className="card mb-3">
            <div className="col-lg-12 card-body d-lg-flex">
              <div className="col-lg-6 ">
                get lesson number and populate into text
                <h5 className="mb-0 text-start">Lesson 1</h5>
                Get lesson minutes and populate into text
                  <h6 className="mb-0 text-start">Time Logged: {lessonMins} minutes</h6>
              </div>
              <div className="col-lg-6">
                <a href="#task1-info" className="taskLink" data-bs-toggle="modal" data-bs-target="#log-task-hours">
                    <button onClick={onClick} className=" btn btn-block w-100 btn-primary"type="button">Log Hours</button>
                  </a>
              </div>
            </div>
          </div> */}

        </div>
      </div>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Log Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" method="">
            <div className="form-group">
            <label><strong>Assignments:</strong></label>
              <div className="row ">
                <div className="col-6">
                  <label>Hours:</label>
                  <input label="Hours:"type="number" pattern="[0-9]*" className="form-control" id="hoursSpent" placeholder="Hours Spent" required />
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
                <div className="col-6">
                  <label>Minutes:</label>
                  <input label="Mins:"type="number" pattern="[0-9]*" className="form-control" id="minutesSpent" placeholder="Minutes Spent" required />
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
              </div>
            </div>
            <div className="form-group">
            <label><strong>Studying:</strong></label>
              <div className="row ">
                <div className="col-6">
                  <label>Hours:</label>
                  <input label="Hours:"type="number" pattern="[0-9]*" className="form-control" id="hoursSpent" placeholder="Hours Spent" required />
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
                <div className="col-6">
                  <label>Minutes:</label>
                  <input label="Mins:"type="number" pattern="[0-9]*" className="form-control" id="minutesSpent" placeholder="Minutes Spent" required />
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
              </div>
            </div>
            <div className="form-group">
            <label><strong>Other:</strong></label>
              <div className="row ">
                <div className="col-6">
                  <label>Hours:</label>
                  <input label="Hours:"type="number" pattern="[0-9]*" className="form-control" id="hoursSpent" placeholder="Hours Spent" required />
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
                <div className="col-6">
                  <label>Minutes:</label>
                  <input label="Mins:"type="number" pattern="[0-9]*" className="form-control" id="minutesSpent" placeholder="Minutes Spent" required />
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
              </div>
            </div>
            <Button className="mt-2 w-100 mb-2" variant="primary" onClick={handleSubmit}>Save Changes</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
    </div>
    </div>
  );
};

export default StudentCourses;