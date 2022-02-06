import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth } from "../AuthContext"

const SignIn = () => {

	const history = useHistory();

  // const auth = getAuth()

	const emailRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	// const db = firebase.database();
	

	const { login,currentUser } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		
		try { 
		setError('')
		setLoading(true)
		await login(emailRef.current.value, passwordRef.current.value)
		// console.log(emailRef.current.value, passwordRef.current.value);
		history.push('/dashboard')
		// updateProfile(auth.currentUser, {
		//   displayName: firstNameRef
		// });
		// console.log(JSON.stringify.currentUser)
		} catch {
		setError('Failed to login')
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
	<div className="container signInContainer" style={{marginTop: '300px'}}>
		<div className="signInFormCont">
		{error && <div className="alert alert-danger" role="alert">{error}</div>}
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input ref={emailRef} type="email" className="shadow-none form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someone@example.com"/>
			</div>
			<div className="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input ref={passwordRef} type="password" className="shadow-none form-control" id="exampleInputPassword1" placeholder="Password"/>
			</div>
			<div className="d-flex flex-xl-row flex-column justify-content-around signInButtonGroup">
				<button disabled={loading} type="submit" className="btn btn-primary signInButton">Sign In</button>
				<button onClick={() => history.push("/register")} className="btn btn-primary registerButton">Register</button>
			</div>
		</form>
		</div>
	</div>
  );
};

export default SignIn;
