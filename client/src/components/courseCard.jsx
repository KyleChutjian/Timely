import React from "react";
import { Link } from "react-router-dom";
import CreateCourseCard from "./createCourseCard";
import JoinCourseCard from "./joinCourseCard";

export class CourseCard extends React.Component {

    render(){
        const { courses } = this.props;
        const { professor } = this.props;

        return (
            <div className="row row-cols-1 row-cols-lg-3">
            {courses.map((course,index) => (
            <div key={index} className="col">
                    <div className="card mb-4 dashCard">
                            <h3 className=" text-start mx-3 mt-3 fw-bolder">{course}</h3>
                            <h5 className=" text-start mx-3">Logged Tasks: 1</h5>
                            <button href={`/courses/${course}`} type="button" className="btn mx-3 my-3 btn-block btn-primary rounded button">{this.props.professor === true ? "Manage Course" : "View Course"}</button>
                    </div>
                </div>
            ))}
            
            {/* If professor, add create course card
            else add join course card */}
            <div className="col">
                    {professor && <CreateCourseCard courses = {this.props.courses}/>}
                    {!professor && <JoinCourseCard courses = {this.props.courses}/>}
                </div>
            </div>
        );
    }
}

export default CourseCard;
