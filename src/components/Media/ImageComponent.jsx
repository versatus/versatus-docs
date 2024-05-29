import React from 'react';

const ImageComponent = ({ className, wrapperClass }) => {
  return (
    <div className={`media-wrapper ${wrapperClass}`}>
      <img className={className} alt={className} />
    </div>
  );
};

export default ImageComponent;
