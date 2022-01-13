import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app"
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyAsdAU_ytqd0SbbvpyZ6GXsLhNsNb8s2I8",
  authDomain: "proyecto1-5a4ab.firebaseapp.com",
  projectId: "proyecto1-5a4ab",
  storageBucket: "proyecto1-5a4ab.appspot.com",
  messagingSenderId: "230917855572",
  appId: "1:230917855572:web:83b2272af960ca111210c1",
  measurementId: "G-PFYG6Z7NV5"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
