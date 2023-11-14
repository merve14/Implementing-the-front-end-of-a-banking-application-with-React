import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../designs/img/argentBankLogo.webp";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const isAuthenticated = !!localStorage.getItem("token");

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
          <div className="sign-out-icon">
            <NavLink to="/Profile" className="return-to-profile">
              <FontAwesomeIcon icon={faUserCircle} />
              {profile.userName}{" "}
            </NavLink>{" "}
            <p onClick={handleSignOut}>
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
