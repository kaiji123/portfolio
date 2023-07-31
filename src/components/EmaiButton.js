import React from 'react';
import './EmailButton.css'
const EmailButton = ({ email }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button onClick={handleEmailClick}>Send me Email</button>
  );
};

export default EmailButton;
