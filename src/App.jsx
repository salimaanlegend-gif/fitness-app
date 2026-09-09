import React, { useState } from "react";
import { FitnessSubscription } from "./components/FitnessSubscription";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h1>🏋️ Fitness App</h1>
          <p>Transform your body, change your life</p>
          
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          
          <button
            onClick={() => username && setIsLoggedIn(true)}
            className="login-btn"
            disabled={!username}
          >
            Get Started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <h1>🏋️ Fitness App</h1>
        <div className="user-info">
          <span>Welcome, {username}!</span>
          <button onClick={() => setIsLoggedIn(false)} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <FitnessSubscription />
    </div>
  );
}
