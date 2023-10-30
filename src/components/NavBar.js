import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../designs/img/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({
  isAuthenticated,
  showSignOutIcon,
  ShowSignOutText,
  onSignOut,
}) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    if (onSignOut) {
      onSignOut();
    }
    navigate("/");
  };

  return (
    <div className="navigationBar">
      <NavLink to="/">
        <img src={logo} alt="argent bank logo" className="navbar-logo" />
      </NavLink>
      <div className="two-icons">
        {isAuthenticated ? (
          <div className="sign-out-icon" onClick={handleSignOut}>
            {ShowSignOutText && <p>{ShowSignOutText}</p>}
            {showSignOutIcon && <FontAwesomeIcon icon={faRightFromBracket} />}
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
