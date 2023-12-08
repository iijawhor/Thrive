import React from "react";
import "./LogoutButton.css";
import { useDispatch } from "react-redux";
import authService from "../../firebase/firebaseAuthentication";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };

  return (
    <div>
      <button onClick={logoutHandler} className="logoutButton">
        Log out
      </button>
    </div>
  );
}

export default LogoutButton;
