import React from 'react';
import { useHistory } from "react-router-dom";


const Register = () => {

  const history = useHistory();


  return (
    <div className="container-fluids d-flex flex-column align-items-xl-center align-items-start flex-xl-row justify-content-center" style={{marginTop: '300px',marginLeft: '50px',marginRight: '50px'}}>
      <div className="col-lg-5 regDescription">
        <p>Register and get $5,000 to invest on cryptocurrencies.</p>  
      </div>
      <div className="container regContainer" >
      <div className="regFormCont">
      <form>
        <div className="d-flex flex-column flex-xl-row justify-content-between">
          <div className="form-group" style={{width: '100%',marginRight: '3px'}}>
            <label for="firstname" style={{fontSize:"18px"}}>First Name</label>
            <input type="text" className="shadow-none form-control" id="firstname" aria-describedby="firstname" placeholder="First Name"/>
          </div>
          <div className="form-group" style={{width: '100%',marginLeft:"3px"}}>
            <label for="lastname" style={{fontSize:"18px"}}>Last Name</label>
            <input type="text" className="shadow-none form-control" id="lastname" aria-describedby="lastname" placeholder="Last Name"/>
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1" style={{fontSize:"18px"}}>Email address</label>
          <input type="email" className="shadow-none form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someone@example.com"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" style={{fontSize:"18px"}}>Password</label>
          <input type="password" className="shadow-none form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="d-flex registerButtonGroup">
          <button className="btn btn-primary registerRegisterButton">Register</button>
        </div>
      </form>
      </div>
    </div>
  </div>
  );
};

export default Register;
