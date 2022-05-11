import React, { useState, useEffect} from "react";
import CourseCard from "../components/courseCard";

function Dashboard() {

    // TODO: Populate with axios / userservice methods
    // const [modalIsOpen,setModalIsOpen] = useState(false)
    const [professor,setProfessor] = useState(true)
    const [user, setUser] = useState("Max Petruzziello")
    const [courses, setCourses] = useState(['ENR210','SER500','SER420', 'CSC290'])

  return (
    <div className="mx-auto">
    <div className="container">
        <div className="row">
                <h1 className="Welcome text-start py-3">Welcome back, <strong>{professor ? ("Professor " + user ) : user}!</strong></h1>
                <CourseCard courses = {courses} professor = {professor}/>
        </div>
    </div>
</div>
  )
}

export default Dashboard;