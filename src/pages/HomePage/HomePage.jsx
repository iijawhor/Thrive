import React, { useEffect, useState } from "react";
import "./HomePage.css";
import authService from "../../firebase/firebaseAuthentication";
import Container from "../../components/container/Container";

function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        setUser(userData);
      }
    });
  }, []);

  if (!user) {
    return (
      <div>
        <Container>
          <div>
            <div>
              <h1>Login to read posts</h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <div>No post to display</div>
        <p className="loggedUser">
          Logged user id:
          <span className="loggedUserId">{user.uid || "No user"}</span>
        </p>
      </Container>
    </div>
  );
}

export default HomePage;
