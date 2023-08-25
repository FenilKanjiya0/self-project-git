import React, { useState } from "react";
import styles from "./Ragistration.module.css";
import InputControls from "../InputControls/InputControls";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../../firebase";

const Ragistration = () => {
  const [userValues, setUserValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(!userValues.name && !userValues.email && !userValues.pass) {
      setErrMsg('Fill all Fields')
      return;
    }
    setErrMsg('');

    createUserWithEmailAndPassword(auth, userValues.email, userValues.password).then(async(res) => {
      console.log(res)
      const user = res.user
      await updateProfile(user, {
        displayName: userValues.name
      })
      navigate('/login')
    })
    .catch((err) => setErrMsg(err.message))
   
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Signup</h1>

          <InputControls
            label="Name"
            placeholder="Enter your name"
            value={userValues.name}
            onChange={(e) => setUserValues((prev) => ({...prev, name: e.target.value}))}
          />
          <InputControls
            label="Email"
            placeholder="Enter email Address"
            value={userValues.email}
            onChange={(e) => setUserValues((prev) => ({...prev, email: e.target.value}))}
          />
          <InputControls
            label="password"
            placeholder="Enter Password"
            value={userValues.password}
            onChange={(e) => setUserValues((prev) => ({...prev, password: e.target.value}))}
          />

          <div className={styles.footer}>
          <b className={styles.error}>{errMsg}</b>
            <button onClick={handleSubmit}>Sign up</button>
            <p>
              Already have an account?{" "}
              <span>
                {" "}
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ragistration;
