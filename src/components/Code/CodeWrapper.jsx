import React, { useState, useRef, useEffect, ReactNode } from 'react';

const CodeWrapper = ({ children, height, hidden = true }) => {
  const [showDetails, setShowDetails] = useState(!hidden);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div 
      className="code-container"
      onDoubleClick={toggleDetails}
      title="Double click to open/close"
    >
      <pre
        className={`code-wrapper-code`}
        style={{ maxHeight: showDetails ? 'none' : height || '250px', overflow: 'hidden' }}>
        {children}
      </pre>
      <button 
        onClick={toggleDetails}
        className="code-wrapper-btn"
      >
        {showDetails ? '▲' : '▼'}
      </button>
    </div>
  );
};

export default CodeWrapper;
