import React, { useState, useEffect } from "react";
import './land.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState([]); // History of flagged times
  const [showHistory, setShowHistory] = useState(false); // Flag to toggle history display

  // Effect to update time at intervals when running
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update every 10ms
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup on unmount or stop
  }, [isRunning]);

  // Start stopwatch
  const start = () => {
    setIsRunning(true);
  };

  // Stop stopwatch
  const stop = () => {
    setIsRunning(false);
  };

  // Reset stopwatch and clear history
  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setHistory([]);
  };

  // Flag current time to history
  const flagTime = () => {
    if (isRunning) {
      setHistory((prevHistory) => [...prevHistory, time]);
    }
  };

  // Toggle history visibility
  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  // Format time into hh:mm:ss.ms
  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor(time / 3600000);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        {!isRunning ? (
          <button className="button" onClick={start}>
            Start
          </button>
        ) : (
          <button className="button" onClick={stop}>
            Stop
          </button>
        )}
        <button className="button" onClick={reset}>
          Reset
        </button>
        <button className="button" onClick={flagTime}>
          Flag
        </button>
        <button className="button" onClick={toggleHistory}>
          {showHistory ? "Hide History" : "Show History"}
        </button>
      </div>
      {showHistory && (
        <div className="historyContainer">
          <h2>History</h2>
          {history.length > 0 ? (
            <ul className="historyList">
              {history.map((record, index) => (
                <li key={index} className="historyItem">
                  #{index + 1}: {formatTime(record)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="noHistory">No flagged times yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
