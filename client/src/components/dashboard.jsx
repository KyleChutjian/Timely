import React, { useState, useEffect } from "react";
import CourseCard from "./courseCard";
import axios from "axios";
import { getUserById } from "../service/userService";
import { getCourses, getAllCourses } from "../service/userService";
import { getUser } from "../service/authService";

function DashboardComp() {
  const [userId, setUserId] = useState();
  const [id, setId] = useState();
  const [user, setUser] = useState();
  const [isProfessor, setIsProfessor] = useState();
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState([]);

  //get all courses by user Id and check if student or professor
  useEffect(() => {
    //get the data from the api
    const bool = getUser().isProfessor;
    const userId = getUser().id;
    // setIsProfessor(bool);

    // check if user isProf or not
    setUserId(userId);
    if (bool == false) {
      setIsProfessor(false);

      // fetch courses
      const fetchCourses = async () => {
        const data = await getCourses(userId);
        const data2 = await getAllCourses();
        //const dataAllCourses = await getCourses();
        //console.log(dataAllCourses);
        setCourses(data.data);
        setCourses(
          data.data.map((course, index) => {
            return course.name;
          })
        );
        //console.log(data);
        setCourseId(
          data.data.map((course, index) => {
            console.log(course);
            return course._id;
          })
        );
      };
      fetchCourses();
      setUser("Student");
    } else {
      setIsProfessor(true);
      const fetchCourses = async () => {
        const data = await getCourses(userId);
        const data2 = await getAllCourses();
        //const dataAllCourses = await getCourses();
        //console.log(dataAllCourses);
        setCourses(data.data);
        setCourses(
          data.data.map((course, index) => {
            return course.name;
          })
        );
        //console.log(data);
        setCourseId(
          data.data.map((course, index) => {
            console.log(data);

            return course._id;
          })
        );
      };
      fetchCourses();

      setUser("Professor");
    }

    // //setIsProfessor(currentUser.isProfessor)
  }, []);

  // used for styling - makes component background fill height
  const divStyle = {
    height: "100vh",
  };

  return (
    <div className="bg-light mx-auto" style={divStyle}>
      <div className="container">
        <div className="row">
          <h1 className="Welcome text-start py-3">
            Welcome back, {user} <strong>!</strong>
          </h1>
          <CourseCard
            courses={courses}
            user={userId}
            professor={isProfessor}
            courseId={courseId}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardComp;
