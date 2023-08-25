import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { getAuth, signOut } from "firebase/auth";
import "./Home.css";

const Home = (props) => {
  const [logout, setLogout] = useState(false);

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
  return (
    <>
      <nav class="nav">
        <img
          class="nav__collapser"
          src="https://raw.githubusercontent.com/JamminCoder/grid_navbar/master/menu.svg"
          alt="Collapse"
        />
        <a class="nav__brand">AWESOME</a>

        <div class="nav__collapsable">
          <a href="#">Home</a>
          <a href="#">Upload Photos</a>
          <a href="#">Show</a>

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
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 className="text-center">{props.name ? `Welcome - ${props.name}` : `Please Login`}</h2>
     
            
    </>
  );
};

export default Home;
