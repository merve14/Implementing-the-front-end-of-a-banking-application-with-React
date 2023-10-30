import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import LogIn from "./pages/LogIn.js";
import Profile from "./pages/Profile.js";
import { useDispatch } from "react-redux";
import { getToken } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();

  if (localStorage.token) {
    dispatch(getToken({ token: localStorage.token }));
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
