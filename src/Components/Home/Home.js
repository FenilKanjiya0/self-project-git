import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { getAuth, signOut } from "firebase/auth";
import "./Home.css";
import { auth } from "../../firebase";

const Home = (props) => {
  const [logout, setLogout] = useState(false);
  const [userName, setUserName] = useState('')

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLogout(true);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, [auth]);
  return (
    <>
      <nav class="nav">
        <img
          class="nav__collapser"
          src="https://raw.githubusercontent.com/JamminCoder/grid_navbar/master/menu.svg"
          alt="Collapse"
        />
        <a class="nav__brand">{userName ? `Welcome - ${userName}` : `Please Login`}</a>

        <div class="nav__collapsable">
          <a href=""><Link to="/">Home</Link></a>
          <a href=""><Link to="/uploadphotos">Upload Photos</Link></a>
          <a href=""><Link to="/showphotos">Show</Link></a>

          <div class="nav__cta">
            {logout ? (
              <>
                <a class="cta">
                  {" "}
                  <Link to="/login">Login</Link>
                </a>
                <a class="cta">
                  <Link to="/signup">Signup</Link>
                </a>
              </>
            ) : (
              <a class="cta" onClick={handleLogout}>
                Log Out
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
