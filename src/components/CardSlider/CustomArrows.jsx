import React from 'react';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', height: '50px', width: '50px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', height: '50px', width: '50px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export { CustomPrevArrow, CustomNextArrow };
