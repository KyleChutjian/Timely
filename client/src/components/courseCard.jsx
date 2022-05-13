import React, {useState} from "react";
import { Link } from "react-router-dom";
import CreateCourseCard from "./createCourseCard";
import JoinCourseCard from "./joinCourseCard";
import { useNavigate } from "react-router-dom";

export class CourseCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
       
    }
    handleClick(courseName) {
        
        console.log(courseName);
        return courseName;
      }
    render(){
       
        const { courses } = this.props;
        const { professor } = this.props;
        const { user } = this.props;
        const {courseId} = this.props;


        return (
            <div className="row row-cols-1 row-cols-lg-3">
            {courses.map((course,index) => (
            <div key={index} className="col">
                    <div className="card mb-4 dashCard">
                    <img class="card-img-top" src="https://i.ibb.co/L9rb20M/classroom.jpg" alt="Course Image" />
                            <h3 className=" text-start mx-3 mt-3 fw-bolder">{course}</h3>
                            {/* <h5 className=" text-start mx-3">Logged Tasks: 40</h5> */}

                            {/* If professor, route to *********DATA PAGE!!!, (NEED TO CHANGE)****** */}
                            {this.props.professor && <Link to="/dashStudent">
                            <button 
                             type="button" className="btn mb-3 my-1 btn-primary rounded button " style={{ width: '92%' }}>View Data</button>
                             </Link>}

                             {/* If user isn't a professor, route to course page where they can log data */}
                             {!this.props.professor && <Link to="/dashStudent" state={[course,user,courseId]} >
                            <button 
                             type="button" className="btn  mb-3  btn-primary rounded button" style={{ width: '92%' }} onClick={() => this.handleClick({course})}>View Course</button>
                             </Link>}

                    </div>
                </div>
            ))}
            
            {/* If professor, add create course card
            else add join course card */}
            <div className="col">
                    {professor && <CreateCourseCard courses = {this.props.courses}/>}
                    {/* {!professor && <JoinCourseCard courses = {this.props.courses}/>} */}
                </div>
            </div>
        );
    }
}

export default CourseCard;
