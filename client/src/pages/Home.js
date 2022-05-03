import React from 'react';



function Home() {

  return (
    <div className="container-lg justify-content-center mainContainer d-block">
    <div className="row text-center ">
    <div className="col-lg-12">
          <h1 className="welcome">Introducing Timely!</h1>
          <h6 className="subWelcome">Easily track academic hours and gain insight on performance.</h6>
      </div>
    </div>
    <div className="row rowWithCard">
    <div className="col-lg-12 justify-content-center">
    <div className="card card-plain">
    <div className=" card-header nav-tabs-navigation">
    <ul className="nav nav-pills nav-justified" data-tabs="tabs">
                              <li className="nav-item">
                                  <a className="nav-link active studentPill" href="#Student" data-toggle="tab">Student</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link adminPill" href="#Admin" data-toggle="tab">Professor</a>
                              </li>
                          </ul>
    </div>
    <div className="card-body">
    <div className="tab-content text-center">
    <div className="tab-pane active" id="Student">
    <h4 className="logInToStartText">Welcome <strong>Student</strong>, Log In To Get Started</h4>
    <form>
      <input type="text" placeholder="Name..."/>
      <input type="text" placeholder="email@gmail.com"/>
      <input type="text" placeholder="Password123"/>
      <input type="submit"/>
    </form>
    <div class="tab-pane" id="Admin">
                    <h4 class="logInToStartText">Welcome <strong>Professor</strong>, Log In To Get Started</h4>
                    </div>
    </div>
    </div>
    </div>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Home