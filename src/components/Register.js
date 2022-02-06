import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useAuth } from "../AuthContext"

const Register = () => {

  const history = useHistory();

  // const auth = getAuth()

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  // const db = firebase.database();
  

  const { signup, currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError('Passwords not not match')
    }

    try { 
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordConfirmRef.current.value)
      // updateProfile(auth.currentUser, {
      //   displayName: firstNameRef
      // });
      // console.log(JSON.stringify.currentUser)
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

//   const user = auth.currentUser;
//   if (user !== null) {
//     // The user object has basic properties such as display name, email, etc.
//     const email = user.email;
//     console.log(email)
// }

  console.log(JSON.stringify(currentUser))



  return (
    <div className="container-fluids d-flex flex-column align-items-xl-center align-items-start flex-xl-row justify-content-center" style={{marginTop: '300px',marginLeft: '50px',marginRight: '50px'}}>
      <div className="col-lg-5 regDescription">
        <p>Register and get $5,000 to invest on cryptocurrencies.</p>  
      </div>
      <div className="container regContainer" >
      <div className="regFormCont">
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column flex-xl-row justify-content-between">
          <div className="form-group" style={{width: '100%',marginRight: '3px'}}>
            <label for="firstname" style={{fontSize:"18px"}}>First Name</label>
            <input ref={firstNameRef} type="text" className="shadow-none form-control" id="firstname" aria-describedby="firstname" placeholder="First Name"/>
          </div>
          <div className="form-group" style={{width: '100%',marginLeft:"3px"}}>
            <label for="lastname" style={{fontSize:"18px"}}>Last Name</label>
            <input ref={lastNameRef} type="text" className="shadow-none form-control" id="lastname" aria-describedby="lastname" placeholder="Last Name"/>
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1" style={{fontSize:"18px"}}>Email address</label>
          <input required type="email" ref={emailRef} className="shadow-none form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someone@example.com"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" style={{fontSize:"18px"}}>Password</label>
          <input required type="password" ref={passwordRef} className="shadow-none form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" style={{fontSize:"18px"}}>Confirm Password</label>
          <input type="password" ref={passwordConfirmRef} className="shadow-none form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="d-flex registerButtonGroup">
          <button type="submit" disabled={loading} className="btn btn-primary registerRegisterButton">Register</button>
        </div>
      </form>
      </div>
    </div>
  </div>
  );
};

export default Register;
