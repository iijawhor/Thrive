import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Container from "../container/Container";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "All Posts", slug: "/all-post", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },

    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus }
  ];
  return (
    <header className="header">
      <Container>
        <nav>
          <div className="logoContainer">
            <Link to="/" className="link">
              <Logo style={{ width: "70px" }} />
            </Link>
          </div>
          <ul className="navbarItems">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="navbarItemButton"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
