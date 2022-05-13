import React, {useState, useRef, useEffect} from 'react';
import { Button, Modal} from 'react-bootstrap';
import { signup, getAllCourses, enrollInCourse} from '../service/userService';

function JoinCourseCard() {
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



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onClick = () => setShow(true);
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
                <div className="btn-group-vertical" role="group" aria-label="Basic checkbox toggle button group">
{courses.map(renderOptions)}
</div>
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