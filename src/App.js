import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import LogIn from "./pages/LogIn.js";
import Profile from "./pages/Profile.js";
import { useDispatch } from "react-redux";
import { getToken } from "./store/userSlice";
import { setGetProfile } from "./store/profileSlice";

function App() {
  const dispatch = useDispatch();
  const fetchDataUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      const data = await response.json();
      dispatch(setGetProfile({ data }));
    } catch (err) {
      console.log(err);
    }
  };

  if (localStorage.token) {
    dispatch(getToken({ token: localStorage.token }));
    fetchDataUser();
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
