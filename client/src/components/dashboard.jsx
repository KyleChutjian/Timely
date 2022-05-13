import React, { useState, useEffect} from "react";
import CourseCard from "./courseCard";
import axios from 'axios';
import { getUserById } from "../service/userService";
import {getCourses, getAllCourses} from "../service/userService";
import {getUser} from "../service/authService";

function DashboardComp () {
  
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();
  const [isProfessor, setIsProfessor] = useState();
  const [courses, setCourses] = useState([]);
  useEffect( () => {

      //get the data from the api
      const bool = getUser().isProfessor;
      const userId = getUser().id;
      // setIsProfessor(bool);
      
      setUserId(userId);
      if(bool == false){
        setIsProfessor(false);
        const fetchCourses = async () => {
          const data = await getCourses(userId);
          const data2 = await getAllCourses();
          //const dataAllCourses = await getCourses();
          //console.log(dataAllCourses);
          setCourses(data.data);
          setCourses(data.data.map((course,index) => {
            return course.name;
          }));
        }
        fetchCourses();
        setUser("Student");
      }else{
        setUser("Professor")
      }

 

    // //setIsProfessor(currentUser.isProfessor)
  }, []);
  //   const currentUser = getUser();
  //   setUser(currentUser);
  //   setIsProfessor(currentUser.isProfessor)
  //   if (currentUser.isProfessor) {
  //     //if the user is a professor get the courses created by the facutly
  //     getCourses(currentUser.id).then((res) => {
  //       const data = res.data;
  //       setCourses(data);
  //     });
  //   } else {
  //     //if the user is a student get enrolled courses
  //     getCourses(currentUser.id).then((res) => {
  //       const data = res.data;
  //       setCourses(data);
  //     });
  //   }
  // }, []);
  
// used for styling - makes component background fill height
const divStyle = {
  height: "100vh"
};
   
    return (
      <div className="bg-light mx-auto" style={divStyle}>
          <div className="container">
                <div className="row">
                        <h1 className="Welcome text-start py-3">Welcome back, {user} <strong>!</strong></h1>
                        <CourseCard courses = {courses} user = {userId} professor = {isProfessor}/>
                </div>
            </div>
        </div>
      )
    }


export default DashboardComp;