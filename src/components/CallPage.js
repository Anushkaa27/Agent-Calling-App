import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/styles.css';

function CallPage() {
  const history = useHistory();
  const [timer, setTimer] = useState(0);
  const [isCallOnHold, setIsCallOnHold] = useState(false);
  const [isCallMuted, setIsCallMuted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!isCallOnHold) {
        setTimer(prevTimer => prevTimer + 1);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isCallOnHold]);

  const handleEndCall = () => {
    history.push('/');
  };

  const handleHoldCall = () => {
    setIsCallOnHold(prevState => !prevState);
    setShowAlert(true);
    setAlertMessage(isCallOnHold ? '' : 'Call is on hold');
  };

  const handleMuteCall = () => {
    setIsCallMuted(prevState => !prevState);
    setShowAlert(true);
    setAlertMessage(isCallMuted ? '' : 'Call is muted');
  };

  return (
    <div className="container call-page">
      {showAlert && <div>{alertMessage}</div>}
      <div>On-going call with the {timer} seconds</div>
      <button onClick={handleEndCall}>End Call</button>
      <button onClick={handleHoldCall}>{isCallOnHold ? 'Unhold Call' : 'Hold Call'}</button>
      <button onClick={handleMuteCall}>{isCallMuted ? 'Unmute Call' : 'Mute Call'}</button>
    </div>
  );
}

export default CallPage;
