import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import { getAuth, signOut } from "firebase/auth";
import "./Home.css";
import { auth } from "../../firebase";

const Home = (props) => {
  // const [logout, setLogout] = useState(false);
  const [userName, setUserName] = useState("");
  const [shownav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // setLogout(true);
        navigate("/");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setShowNav(true);
      } else {
        setUserName("");
        setShowNav(false);
      }
    });
  }, [auth]);
  return (
    <>
      <nav class="nav bg-white">
        <img
          class="nav__collapser"
          src="https://raw.githubusercontent.com/JamminCoder/grid_navbar/master/menu.svg"
          alt="Collapse"
        />
        <a class="nav__brand">
          {userName ? `Welcome - ${userName}` : `Please Login`}
        </a>

        <div class="nav__collapsable">
          {shownav && (
            <>
              <a href="">
                <Link to="/">Home</Link>
              </a>
              <a href="">
                <Link to="/uploadphotos">Upload Photos</Link>
              </a>
              <a href="">
                <Link to="/showphotos">Show</Link>
              </a>
            </>
          )}

          <div class="nav__cta">
            {!shownav ? (
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
