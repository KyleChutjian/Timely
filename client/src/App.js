import React, {useState} from 'react';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Home from './pages/Home';
import DashboardComp from './components/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      
      <Router>
        <NavbarComp />
        {/* SWITCH ROUTES */}
        <Routes> 
          <Route path="/" exact element={<Home />} />
          <Route path="/dash" exact element={<DashboardComp />} />
        </Routes>
        {/* END SWITCH */}
      </Router>
     </div>
  );
}

export default App;
