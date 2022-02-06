import React from 'react';
import { useHistory } from "react-router-dom";


const Header = () => {

  const history = useHistory();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className="navbar navbar-expand-xl fixed-top navbar-dark" id="navbarMain">
        <div className="container-fluid">
          {/* <div class="row"> */}
          <a onClick={scrollToTop} className="navbar-brand">Some Name</a>
          {/* <a onClick={() => history.push("/")} className="navbar-brand">Some Name</a> */}
          <button className="navbar-toggler" id="expandBtn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="col mr-auto collapse navbar-collapse justify-content-lg-between justify-content-center" id="navbarNav">
            <div className="container" id="expandMenu">
              <div className="col navbar-nav d-flex justify-content-lg-center">
                <a href="/" className="nav-link">Home</a>
                <a href="#" className="nav-link">Blog</a>
                <a href="/currentrates" className="nav-link">Check Rates</a>
                <a href="#" className="nav-link">Learn More</a>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center" style={{marginLeft: '0px'}} id="signinbtn">
              <div onClick={() => history.push(`/signin`)} className="btn signinbtn btn-outline-secondary text-nowrap" style={{minWidth: '120px'}}><span className="signinText">Sign In</span></div> 
            </div>
          </div>
          {/* </div> */}
        </div>
      </nav>
  );
};

export default Header;
