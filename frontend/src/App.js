import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_BASE_URL}/test`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            passing: "value-to-backend",
        }),
    })
        .then((res) => res.json())
        .then((data) => {
          // Handle data here  

        })
        .catch((err) => {
            console.log(err);
        });
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Be A Good Bot - AI Club
        </p>
        <a
          className="App-link"
          href="https://beagoodbot.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          BGB Collab
        </a>
      </header>
    </div>
  );
}

export default App;
