import React from 'react';

interface GefizLogoProps {
  size?: number;
  className?: string;
}

const GefizLogo: React.FC<GefizLogoProps> = ({ size = 40, className = "" }) => {
  return (
    <img
      src="/gefiz-logo.png"
      alt="Gefiz Travels Logo"
      width={size}
      height={size}
      className={`${className} object-contain`}
      style={{ width: size, height: size }}
    />
  );
};

export default GefizLogo;
