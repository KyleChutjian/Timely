import React from "react";
import AddCourseModal from "./addCourseModal";

export class AddCourseCard extends React.Component {

    render(){
        var modalisOpen = this.props.modalIsOpen;
        return (
        <div className="">
            <a href="#addCourse" data-bs-toggle="modal" data-bs-target="#addCourseModal" onClick={(event) => {
    event.preventDefault(); modalisOpen = !modalisOpen; console.log(modalisOpen)}} className="linkedCard">
            <div className="card mb-4 dashCard">
                <h1 className="display-1 fw-bold text-center pt-4 ">+</h1>
                <h3 className="text-center align-middle pb-4 fw-bold">{this.props.professor === true ? "Create Course" : "Join Course"}</h3>
            </div>
            </a>
            {modalisOpen && <AddCourseModal/>}
        </div>
        );
    }
}

export default AddCourseCard;