import React, { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";
import axios from "axios";
const Data = () => {
  const [professor, setProfessor] = useState(true);
  const [user, setUser] = useState("");
  const [courses, setCourses] = useState([
    "ENR210",
    "SER500",
    "SER420",
    "CSC290",
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/user/6254b7e8d6a914b5b6981b09%22")
      .then((data) => {
        setUser(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const XLSX = require("xlsx");
  const students = [user];

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
          <h1 className="Welcome text-start py-3 text-light ">{courses[1]}</h1>
        </div>
        <div className="chart">
          <Table responsive variant="light">
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>{index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }).map( (_, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>{index + 1}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <button onClick={file}>Click me</button>
    </div>
  );
};

export default Data;