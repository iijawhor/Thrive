import React, { useState } from "react";
import "./LoginComponent.css";
import { login as authLogin } from "../../store/authSlice";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import authService from "../../firebase/firebaseAuthentication";
function LoginComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const loginHandler = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    loginHandler({ email, password });
  };
  return (
    <div>
      <div>
        <div className="logo">
          <span>Thrive</span>
        </div>
      </div>
      <div className="loginFormContainer">
        <div className="loginFormContainerHead">
          <h2 className="loginFormTitle">SignIn to read posts</h2>
        </div>
        <form action="" onSubmit={submitForm} className="signupForm">
          <div className="">
            <Input
              placeholder="Enter your email..."
              label="Email "
              type="email"
              formContext="login"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="">
            <Input
              placeholder="Enter your password"
              label="Password "
              type="password"
              formContext="login"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" className="loginFormSubmitButton">
            Sign In
          </button>
        </form>
      </div>
      <p className="linkToSignup">
        Don&apos;t have any account?&nbsp;
        <Link to="/signup" className="linkToSignupLink">
          Signup
        </Link>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginComponent;
