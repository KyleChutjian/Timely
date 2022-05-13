import React, { useState, useEffect } from "react";
import { getCourses } from "../service/userService";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Data = (props) => {
  const { state: course } = useLocation();
  const [professor, setProfessor] = useState(true);
  const [lessons, setLessons] = useState();
  const [student, setStudents] = useState();
  const [entry, setEntry] = useState();
  const [user, setUser] = useState("");
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    //Query for course
    getCourses(props.course)
      .then((res) => {
        setLessons(res.data[1].numLessons);
        setEntry(res.data[1].entry);
        setStudents(res.data[1].numStudents);
        console.log(res.data);
        console.log(lessons);
      })
      .catch((err) => console.log(err));
  }, []);
  const XLSX = require("xlsx");
  const students = [entry];

  const convertJsonToExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(students);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "students");
    XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workBook, "studentsData.xlsx");
  };
  function file() {
    convertJsonToExcel();
  }
  return (
    <div className="mx-auto">
      <div className="container">
        <div className="row">
          <h1 className="Welcome text-start py-3 text-light ">{course}</h1>
        </div>
      </div>
      <div className="chart">
        <Table responsive variant="light">
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: lessons }).map((_, index) => (
                <th key={index}>{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: student }).map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {Array.from({ length: lessons }).map((_, index) => (
                  <td key={index}>{entry[index].homeworkId}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <button onClick={file}>Click me</button>
    </div>
  );
};

export default Data;
