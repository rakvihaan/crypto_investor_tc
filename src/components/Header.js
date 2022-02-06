import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth } from "../AuthContext"


const Header = () => {

  const { currentUser,logout } = useAuth();

  const [error, setError] = useState('');

  const history = useHistory();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  async function handleLogout() {

    setError('')
    console.log('hello');

    try {
      await logout();
      history.push("/")
    } catch {
      setError('Failed to log out')
    }
  }
  console.log(currentUser);

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

            {currentUser ? (
              <div class="dropdown " style={{marginRight: "60px"}}>
              <button class="btn btn-secondary shadow-none profileDropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div class="dropdown-item" onClick={() => history.push('/dashboard')}>Profile</div>
                <div class="dropdown-item" onClick={() => handleLogout()}>Log Out</div>
              </div>
            </div>
              // <div className="col-2 d-flex justify-content-center" style={{marginLeft: '0px'}} id="signinbtn">
              //   <div onClick={() => history.push(`/dashboard`)} className="btn signinbtn btn-outline-secondary text-nowrap" style={{minWidth: '120px'}}><span className="signinText">dashboard</span></div> 
              // </div>
              ) :(
                <div className="col-2 d-flex justify-content-center" style={{marginLeft: '0px'}} id="signinbtn">
                  <div onClick={() => history.push(`/signin`)} className="btn signinbtn btn-outline-secondary text-nowrap" style={{minWidth: '120px'}}><span className="signinText">Sign In</span></div> 
                </div>
              )}
          
            
          </div>
          {/* </div> */}
        </div>
      </nav>
  );
};

export default Header;
