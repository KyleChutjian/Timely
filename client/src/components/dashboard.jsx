import React, { useState, useEffect} from "react";
import CourseCard from "./courseCard";
import axios from 'axios';

class DashboardComp extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            modelIsOpen: false,
            admin: "Professor Ruby",
            user: "Max Petruzziello",
            professor: true,
            courses: ['ENR210','SER500','SER420', 'CSC290'],
            index: 0,
            total:4
        }; 
    }
    state = {
        users: []
    }

    
  componentDidMount() {
    axios.get(`http://localhost:5001/`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
        console.log(users);
      })
  }



    // render heading and cards
    render(){


     let professor = this.state.isProfessor;
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
}

export default DashboardComp;