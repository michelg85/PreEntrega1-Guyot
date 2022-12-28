import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj7xjyjAY2GrVGJKYd2N7dTZvLsXDzdww",
  authDomain: "taikosushi-c5379.firebaseapp.com",
  projectId: "taikosushi-c5379",
  storageBucket: "taikosushi-c5379.appspot.com",
  messagingSenderId: "547426844357",
  appId: "1:547426844357:web:52871b97aa3d4fb2cffaac"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

