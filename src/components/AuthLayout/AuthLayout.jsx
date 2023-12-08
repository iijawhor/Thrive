import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  // useEffect(() => {
  //   //TODO : make it more easy
  //   if (authentication && authStatus !== authentication) {
  //     // or u can just write authStatus
  //     navigate("/login");
  //   } else if (!authentication && authStatus !== authentication) {
  //     navigate("/");
  //   }
  //   setLoading(false);
  // }, [authStatus, navigate, authentication]);
  useEffect(() => {
    if (authentication && !authStatus) {
      navigate("/login");
    } else if (!authentication && authStatus) {
      navigate("/");
    }
    setLoading(false);
  }, [authStatus, navigate, authentication]);

  return loading ? (
    <h1>{loading}</h1>
  ) : (
    <>
      <Header />
      {children}
    </>
  );
}

export default Protected;
