import React, {useState, useRef, useEffect} from 'react';
import { Button, Form, Modal} from 'react-bootstrap';
import AddCourseModal from "./addCourseModal";

function CreateCourseCard(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onClick = () => setShow(true);

    const onCreate = () => {
         
            handleClose()
        
    }

        return (
        <div className="">
                <div onClick={onClick} style={{ cursor: "pointer" }} className="card mb-4 dashCard linkedCard text-primary">
                    <h1 className="display-1 fw-bold text-center pt-2 ">+</h1>
                    <h3 className="text-center align-middle pb-2 fw-bold">Create Course</h3>
                </div>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create a New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form action="" method="">
                    <div className="form-group">
                        <label htmlFor='courseName'>Course Name:</label>
                        <input type="text" className="form-control" id="courseName" placeholder="Enter Course Name" required />
                        <div className="invalid-feedback">Enter a valid course name.</div>
                    </div>
                    <div className="form-group">
                        <label className='mt-2'>Number of Lessons:</label>
                        <input type="number" className="form-control" id="courseLessons"  min="0" max="42" onkeyup="if(parseInt(this.value)>42){ this.value =42; return false; }" required />
                        <div className="invalid-feedback">Enter a valid semester.</div>
                    </div>
                    <Button type="button" className="mt-2 w-100 btn btn-primary btn-block"  onClick={handleClose}>Publish Course & Create Invite</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
    }

export default CreateCourseCard;