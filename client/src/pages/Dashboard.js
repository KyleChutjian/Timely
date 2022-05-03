
import React, { useState, useEffect} from "react";
import CourseCard from "../components/courseCard";
import Axios from 'axios';

function Dashboard() {
    this.state = {
        modelIsOpen: false,
        admin: "Professor Ruby",
        user: "Max Petruzziello",
        professor: false,
        courses: ['ENR210','SER500','SER420', 'CSC290'],
        index: 0,
        total:4
    }; 
    let professor = this.state.professor;
  return (
    <div className="bg-light mx-auto">
    <div className="container">
        <div className="row">
                <h1 className="Welcome text-start py-3">Welcome back, <strong>{professor === true ? this.state.admin : this.state.user}!</strong></h1>
                <CourseCard courses = {this.state.courses} professor = {this.state.professor}/>
        </div>
    </div>
</div>
  )
}

export default Dashboard;