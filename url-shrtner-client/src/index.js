import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsZwyjoCJXiEJOY8psUuZzaPOgFNYXSaI",
  authDomain: "shortlink-dbe2f.firebaseapp.com",
  projectId: "shortlink-dbe2f",
  storageBucket: "shortlink-dbe2f.appspot.com",
  messagingSenderId: "586808900734",
  appId: "1:586808900734:web:6bd06153ca88420e5aec2f",
  measurementId: "G-CPR06LM0N0"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
