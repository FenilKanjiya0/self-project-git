import logo from "./logo.svg";
import "./App.css";
import Ragistration from "./Components/Ragistration/Ragistration";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import { useEffect, useState } from "react";

import UploadPhotos from "./Components/UploadPhotos/UploadPhotos";
import ShowPhotos from "./Components/ShowPhotos/ShowPhotos";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'

function App() {
  const [userName, setUserName] = useState("");
  const [login, setLogin] = useState(false)

  useEffect(() => {
    let auth = getAuth()
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else setLogin(false);
    });
  }, [auth]);
 
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Ragistration />} />
        <Route path="/" element={<Home name={userName}/>} />
        { login && 
        <>
        <Route path="/uploadphotos" element={<UploadPhotos />} />
        <Route path="/showphotos" element={<ShowPhotos />} />
        </>
        }
      </Routes>
    </>
  );
}

export default App;
