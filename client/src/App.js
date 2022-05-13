import React, {useState} from 'react';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Home from './pages/Home';
import DashboardComp from './components/dashboard';
import Data from './pages/Data'
import Register from "./pages/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCourses from './components/StudentCourses';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      
      <Router>
        <NavbarComp />
       
        <Routes> 
          <Route path="/" exact element={<Home />} />
          <Route path="/dash" exact element={<DashboardComp />} />
          <Route path="/dashStudent" exact element={<StudentCourses />} />
       <Route path="/data" exact element = {<Data/>} />
        </Routes>
        
      </Router>
     </div>
  );
}

export default App;
