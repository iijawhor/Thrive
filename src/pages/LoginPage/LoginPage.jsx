import React from "react";
import "./LoginPage.css";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import Container from "../../components/container/Container";
function LoginPage() {
  return (
    <div className="LoginPage">
      <h2 className="LoginHeading">Signin to THRIVE</h2>
      <Container className="LoginContainer">
        <div className="LoginBox">
          <LoginComponent />
        </div>
        <div className="LoginWidget">
          <img
            className="LoginWidgetImage"
            src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9303af75-e612-443c-a072-e69e4a819f39_1958x1804.png"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;
