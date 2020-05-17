import React from "react";
import { useAuth0 } from "../react-auth0-spa";

// navbar component
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand mb-0 h1 mr-auto">Stackprint Notes</span>
      <ul className="navbar-nav">
        {!isAuthenticated && (
          <li className="nav-item">
            <button className="nav-link" onClick={() => loginWithRedirect({})}>
              Log In
            </button>
          </li>
        )}
        {isAuthenticated && (
          <li className="nav-item">
            <button className="nav-link" onClick={() => logout()}>
              Log Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
