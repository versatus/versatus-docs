import React, { useState, useRef, useEffect, ReactNode } from 'react';

const CodeWrapper = ({ children, height, hidden = true }) => {
  const [showDetails, setShowDetails] = useState<boolean>(!hidden);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div 
      className="code-container"
      onDoubleClick={toggleDetails}
      title="Double click to open/close"
    >
      {
        showDetails && <button 
          className="code-close-btn nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50"
          title="Close"
          tabIndex={0}
          onClick={toggleDetails}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path d="M205.66,85.66a8,8,0,0,1-11.32,0L160,51.31V128A104.11,104.11,0,0,1,56,232a8,8,0,0,1,0-16,88.1,88.1,0,0,0,88-88V51.31L109.66,85.66A8,8,0,0,1,98.34,74.34l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,205.66,85.66Z"></path></svg>
        </button>
      }
      <pre
        className={`code-wrapper-code`}
        style={{ maxHeight: showDetails ? 'none' : height || '250px', overflow: 'hidden' }}>
        {children}
      </pre>
        <button 
          onClick={toggleDetails}
          className="code-wrapper-btn nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
        >
          {showDetails ? '▲' : '▼'}
        </button>
    </div>
  );
};

export default CodeWrapper;
