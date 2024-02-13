import React, { useState } from 'react';
import '../styles/styles.css';

function AgentApp() {
  const [status, setStatus] = useState('not ready');
  const [showAlert, setShowAlert] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    if (e.target.value === 'ready') {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  const handleAlertOK = () => {
    setShowAlert(false);
    // Redirect to the call page
    window.location.href = '/call';
  };

  return (
    <div className="container">
      <h1>Agent Status</h1>
      <select value={status} onChange={handleStatusChange}>
        <option value="ready">Ready</option>
        <option value="not ready">Not Ready</option>
      </select>
      {showAlert && (
        <div className="alert">
          <p>Customer is calling!</p><br/>
          <button onClick={handleAlertOK}>OK</button>
        </div>
      )}
    </div>
  );
}

export default AgentApp;
