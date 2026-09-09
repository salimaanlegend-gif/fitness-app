import React, { useState, useEffect } from "react";

export function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeZones = [
    { name: "New York", tz: "America/New_York" },
    { name: "London", tz: "Europe/London" },
    { name: "Tokyo", tz: "Asia/Tokyo" },
    { name: "Sydney", tz: "Australia/Sydney" },
    { name: "Dubai", tz: "Asia/Dubai" },
    { name: "Los Angeles", tz: "America/Los_Angeles" },
    { name: "Singapore", tz: "Asia/Singapore" },
    { name: "Mumbai", tz: "Asia/Kolkata" },
    { name: "South Africa", tz: "Africa/Johannesburg" },
    { name: "Berlin", tz: "Europe/Berlin" },
    { name: "Hong Kong", tz: "Asia/Hong_Kong" },
    { name: "Toronto", tz: "America/Toronto" },
  ];

  const formatTime = (date, timezone) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: timezone,
      hour12: true,
    }).format(date);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌍 World Clock</h1>
      <p style={styles.subheading}>Current Time in Different Time Zones</p>

      <div style={styles.grid}>
        {timeZones.map((tz) => (
          <div key={tz.tz} style={styles.card}>
            <h2 style={styles.cityName}>{tz.name}</h2>
            <div style={styles.timeDisplay}>{formatTime(time, tz.tz)}</div>
            <p style={styles.timezone}>{tz.tz}</p>
          </div>
        ))}
      </div>

      {/* Local Time Display */}
      <div style={styles.localTimeSection}>
        <h2 style={styles.localHeading}>Your Local Time</h2>
        <div style={styles.localTime}>{time.toLocaleTimeString()}</div>
        <p style={styles.localDate}>{time.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#1a1a2e",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    color: "#fff",
  },
  heading: {
    fontSize: "42px",
    textAlign: "center",
    marginBottom: "10px",
    color: "#00d4ff",
    textShadow: "0 0 10px rgba(0, 212, 255, 0.5)",
  },
  subheading: {
    fontSize: "16px",
    textAlign: "center",
    color: "#aaa",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto 50px",
  },
  card: {
    backgroundColor: "#16213e",
    border: "2px solid #00d4ff",
    borderRadius: "12px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  cityName: {
    fontSize: "20px",
    marginBottom: "15px",
    color: "#00d4ff",
    fontWeight: "bold",
  },
  timeDisplay: {
    fontSize: "42px",
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#00ff88",
    marginBottom: "10px",
    textShadow: "0 0 10px rgba(0, 255, 136, 0.5)",
    letterSpacing: "2px",
  },
  timezone: {
    fontSize: "12px",
    color: "#888",
    marginTop: "10px",
  },
  localTimeSection: {
    backgroundColor: "#16213e",
    border: "3px solid #00ff88",
    borderRadius: "12px",
    padding: "40px",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
  },
  localHeading: {
    fontSize: "24px",
    color: "#00ff88",
    marginBottom: "20px",
    textShadow: "0 0 10px rgba(0, 255, 136, 0.5)",
  },
  localTime: {
    fontSize: "60px",
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#00ff88",
    marginBottom: "15px",
    textShadow: "0 0 15px rgba(0, 255, 136, 0.6)",
    letterSpacing: "3px",
  },
  localDate: {
    fontSize: "16px",
    color: "#aaa",
  },
};
