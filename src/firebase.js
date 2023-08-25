// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqnM2Io0ta_riX8wLf2IcjTmJbsuCEWPw",
  authDomain: "git-practice-b549f.firebaseapp.com",
  databaseURL: "https://git-practice-b549f-default-rtdb.firebaseio.com",
  projectId: "git-practice-b549f",
  storageBucket: "git-practice-b549f.appspot.com",
  messagingSenderId: "216867185562",
  appId: "1:216867185562:web:ee40b2f95fe355e8941023",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
