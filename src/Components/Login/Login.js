import React, { useState } from "react";
import styles from "./Login.module.css";
import InputControls from "../InputControls/InputControls";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'



const Login = () => {
  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!userValues.email && !userValues.pass) {
      setErrMsg("Fill all Fields");
      return;
    }
    setErrMsg("");

    signInWithEmailAndPassword(auth, userValues.email, userValues.password)
      .then(async () => {
        navigate("/");
      })
      .catch((err) => setErrMsg(err.message));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Login</h1>

          <InputControls
            label="Email"
            placeholder="Enter email Address"
            value={userValues.email}
            onChange={(e) =>
              setUserValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputControls
            label="password"
            placeholder="Enter Password"
            value={userValues.password}
            onChange={(e) =>
              setUserValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <div className={styles.footer}>
            <b className={styles.error}>{errMsg}</b>
            <button onClick={handleSubmit}>Login</button>
            <p>
              Already have an account?{" "}
              <span>
                {" "}
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
