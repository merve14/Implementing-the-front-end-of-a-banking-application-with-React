import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../designs/img/argentBankLogo.webp";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const profile = useSelector((state) => state.profile);
  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="navigationBar">
      <NavLink to="/">
        <img src={logo} alt="argent bank logo" className="navbar-logo" />
      </NavLink>
      <div className="two-icons">
        {isAuthenticated ? (
          <div className="sign-out-icon" onClick={handleSignOut}>
            <p>
              <FontAwesomeIcon icon={faUserCircle} /> {profile.userName}{" "}
              <FontAwesomeIcon icon={faRightFromBracket} /> sign out
            </p>
          </div>
        ) : (
          <div className="sign-in-icon">
            <FontAwesomeIcon icon={faUserCircle} />
            <NavLink to="/LogIn" className="sign-in-link">
              Sign In
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
