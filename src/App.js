import logo from "./logo.svg";
import "./App.css";
import Ragistration from "./Components/Ragistration/Ragistration";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, [auth]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Ragistration />} />
        <Route path="/" element={<Home name={userName}/>} />
      </Routes>
    </>
  );
}

export default App;
