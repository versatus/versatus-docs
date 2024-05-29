import React, { ReactNode } from 'react';

const MediaWrapper = ({ children, className }) => {
  return (
    <div className={`media-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default MediaWrapper;
