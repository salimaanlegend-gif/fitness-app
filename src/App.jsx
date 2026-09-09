import React, { useState, useEffect } from "react";
import { FitnessSubscription } from "./components/FitnessSubscription";
import { DigitalClock } from "./components/DigitalClock";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

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
        <div className="nav-links">
          <button
            onClick={() => setCurrentPage("home")}
            className={currentPage === "home" ? "nav-btn active" : "nav-btn"}
          >
            Subscriptions
          </button>
          <button
            onClick={() => setCurrentPage("clock")}
            className={currentPage === "clock" ? "nav-btn active" : "nav-btn"}
          >
            World Clock
          </button>
        </div>
        <div className="user-info">
          <span>Welcome, {username}!</span>
          <button onClick={() => setIsLoggedIn(false)} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      {currentPage === "home" && <FitnessSubscription />}
      {currentPage === "clock" && <DigitalClock />}
    </div>
  );
}
