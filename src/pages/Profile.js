import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TransactionPart from "../components/TransactionPart";
import EditUserInfo from "../components/EditUserInfo";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const handleSignOut = () => {
    // Handle any additional sign-out logic (e.g., redirect to sign-in page)
    setIsAuthenticated(false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.token) {
      console.log("??");
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <NavBar
        isAuthenticated={isAuthenticated}
        showSignOutIcon={isAuthenticated}
        ShowSignOutText="Sign out"
        onSignOut={() => setIsAuthenticated(false)}
      />
      <div className="profile">
        <EditUserInfo />
        <TransactionPart
          accountType="Argent Bank Checking"
          balance="Avaible Balance"
          amount="$2,082.79"
        />
        <TransactionPart
          accountType="Argent Bank Savings"
          balance="Avaible Balance"
          amount="$10,928.42"
        />
        <TransactionPart
          accountType="Argent Bank Credit Card"
          balance="Avaible Balance"
          amount="$184.30"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
