import React, {useState} from "react";
import { Button, Form, Modal} from 'react-bootstrap';
import {getAllLessons} from "../service/userService";

import { Card } from "react-bootstrap";

function StudentCourses () {

    
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const onClick = () => setShow(true);

const onCreate = () => {
     
        handleClose()
    
}
    let x = Math.floor((Math.random() * 100) + 1);
  const cardInfo = [
    {
      title: "Lesson 1",
      text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
    },
    {
        title: "Lesson 2",
        text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
      },
      {
        title: "Lesson 3",
        text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
      },
      {
        title: "Lesson 4",
        text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
      },
      {
        title: "Lesson 5",
        text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
      },
      {
          title: "Lesson 6",
          text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
        },
        {
          title: "Lesson 7",
          text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
        },
        {
          title: "Lesson 8",
          text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
        },
        {
            title: "Lesson 9",
            text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
          },
          {
              title: "Lesson 10",
              text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
            },
            {
              title: "Lesson 11",
              text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
            },
            {
              title: "Lesson 12",
              text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
            },
            {
              title: "Lesson 13",
              text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
            },
            {
                title: "Lesson 14",
                text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
              },
              {
                title: "Lesson 15",
                text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
              },
              {
                title: "Lesson 16",
                text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
              },
              {
                title: "Lesson 17",
                text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
              },
              {
                  title: "Lesson 18",
                  text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                },
                {
                  title: "Lesson 19",
                  text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                },
                {
                  title: "Lesson 20",
                  text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                },
                {
                  title: "Lesson 21",
                  text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                },
                {
                    title: "Lesson 22",
                    text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                  },
                  {
                    title: "Lesson 23",
                    text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                  },
                  {
                    title: "Lesson 24",
                    text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                  },
                  {
                      title: "Lesson 25",
                      text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                    },
                    {
                        title: "Lesson 26",
                        text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                      },
                      {
                        title: "Lesson 27",
                        text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                      },
                      {
                        title: "Lesson 28",
                        text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                      },
                      {
                        title: "Lesson 29",
                        text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                      },
                      {
                          title: "Lesson 30",
                          text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                        },
                        {
                          title: "Lesson 31",
                          text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                        },
                        {
                          title: "Lesson 32",
                          text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                        },
                        {
                            title: "Lesson 33",
                            text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                          },
                          {
                              title: "Lesson 34",
                              text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                            },
                            {
                              title: "Lesson 35",
                              text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                            },
                            {
                              title: "Lesson 36",
                              text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                            },
                            {
                              title: "Lesson 37",
                              text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                            },
                            {
                                title: "Lesson 38",
                                text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                              },
                              {
                                title: "Lesson 39",
                                text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                              },
                              {
                                title: "Lesson 40",
                                text: "Minutes Logged: "+ Math.floor((Math.random() * 100) + 1),
                              },
  ];

  const renderCard = (card, index) => {
      
    return (
        <div className="row d-flex justify-content-center">
        <div className="col-lg-12 align-content-center">
      <Card style={{ width: "100rem" }} key={index} className="box my-2">
        <Card.Img variant="top"  src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <button onClick={onClick} className="btn btn-primary btn-block">Log Minutes</button>
          <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create a New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form action="" method="">                  
            <div className="form-group">
              <h6>Enter time you have worked on certain tasks.</h6>
              <label><strong>Assignments:</strong></label>
              <div className="row">
                <div className="col-6">
                  <label>Hours:</label>
                  <input label="Hours:"type="text" className="form-control" id="hoursSpent"  required/>
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
                <div className="col-6">
                  <label>Minutes:</label>
                  <input label="Mins:"type="text" className="form-control" id="minutesSpent" placeholder="Minutes Spent" required/>
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
              </div>
              <label><strong>Studying:</strong></label>
              <div className="row">
                <div className="col-6">
                  <label>Hours:</label>
                  <input label="Hours:"type="number" className="form-control" id="hoursSpent" placeholder="Hours Spent" required/>
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
                <div className="col-6">
                  <label>Minutes:</label>
                  <input label="Mins:"type="number" className="form-control" id="minutesSpent" placeholder="Minutes Spent" required/>
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
              </div>
              <label ><strong>Other:</strong></label>
              <div className="row">
                <div className="col-6">
                  <label>Hours:</label>
                  <input label="Hours:"type="number" className="form-control" id="hoursSpent" placeholder="Hours Spent" required/>
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
                <div className="col-6">
                  <label>Minutes:</label>
                  <input label="Mins:"type="number" className="form-control" id="minutesSpent" placeholder="Minutes Spent" required/>
                  <div className="invalid-feedback">Enter a valid number in hours</div>
                </div>
              </div>
            </div>
          <button type="button" className="btn btn-primary btn-block" data-bs-dismiss="modal" onClick={handleClose}>Log Hours</button>
          </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </Card.Body>
      </Card>
      </div>
  </div>
    );
  };
 

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default StudentCourses;