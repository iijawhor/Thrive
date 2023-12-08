import React, { useState } from "react";
import "./SignupComponent.css";
import authService from "../../firebase/firebaseAuthentication";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../store/authSlice";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
function SignupComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createUser(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (e) => {
    const data = { name, email, password };
    e.preventDefault();
    try {
      await signup({ name, email, password });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signupComponent">
      <div className="logo">
        <span>THRIVE</span>
      </div>
      <div className="signupFormContainer">
        <div className="signupFormContainerHead">
          <h2 className="signupFormTitle">Signup to read posts</h2>
          <p className="signupFormTitlePara">
            Enter details to create your account
          </p>
        </div>
        <div className="signupOptions">
          <p className="signupWithGoogle">Signup with Google</p>
          <p className="signupWithFacebook">Signup with Facebook</p>
        </div>

        <div className="border">
          <span className="borderLine" /> OR
          <span className="borderLine" />
        </div>

        <form action="" onSubmit={signupHandler} className="signupForm">
          <div className="">
            <Input
              placeholder="Enter your full name"
              label="Full Name "
              type="text"
              formContext="signup"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="">
            <Input
              placeholder="Enter your email address"
              label="Email "
              type="email"
              formContext="signup"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="">
            <Input
              label="Password "
              placeholder="Enter new password"
              type="password"
              formContext="signup"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" className="signupFormSubmitButton">
            Signup
          </button>
        </form>
      </div>
      <p className="linkToSignin">
        Already have an account?&nbsp;
        <Link to="/login" className="linkToSigninLink">
          Signin
        </Link>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SignupComponent;
