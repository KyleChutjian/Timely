import React, {useState, useRef, useEffect} from 'react';
import { Button, Modal} from 'react-bootstrap';

function JoinCourseCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onClick = () => setShow(true);

        return(
            <div className="">
                <div onClick={onClick} style={{ cursor: "pointer" }} className="card mb-4 dashCard linkedCard text-primary">
                    <h1 className="display-1 fw-bold text-center pt-2 ">+</h1>
                    <h3 className="text-center align-middle pb-2 fw-bold">Join Course</h3>
                </div>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
                <Modal.Header closeButton>
                    <Modal.Title>Join a Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="Invitation Code:">Invitation Code:</label>
                            <input type="text" class="form-control" id="courseName" placeholder="Enter Course Invitation Code" required/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleClose}>Join Course</Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
    }

export default JoinCourseCard;