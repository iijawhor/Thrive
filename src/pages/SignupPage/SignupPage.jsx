import React from "react";
import "./SignupPage.css";
import SignupComponent from "../../components/SignupComponent/SignupComponent";
import Container from "../../components/container/Container";
function SignupPage() {
  return (
    <div className="signupPage" style={{ height: "100vh" }}>
      <h2 className="signupHeading">Signup to THRIVE</h2>
      <Container className="signupContainer">
        <div className="signupBox">
          <SignupComponent />
        </div>
        <div className="signupWidget">
          <img
            className="signupWidgetImage"
            src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9303af75-e612-443c-a072-e69e4a819f39_1958x1804.png"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}

export default SignupPage;
