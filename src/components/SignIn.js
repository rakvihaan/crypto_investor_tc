import React from 'react';
import { useHistory } from "react-router-dom";

const SignIn = () => {

	const history = useHistory();

  return (
	<div className="container signInContainer" style={{marginTop: '300px'}}>
		<div className="signInFormCont">
		<form>
			<div className="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" className="shadow-none form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someone@example.com"/>
			</div>
			<div className="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" className="shadow-none form-control" id="exampleInputPassword1" placeholder="Password"/>
			</div>
			<div className="d-flex flex-xl-row flex-column justify-content-around signInButtonGroup">
				<button className="btn btn-primary signInButton">Submit</button>
				<button onClick={() => history.push("/register")} className="btn btn-primary registerButton">Register</button>
			</div>
		</form>
		</div>
	</div>
  );
};

export default SignIn;
