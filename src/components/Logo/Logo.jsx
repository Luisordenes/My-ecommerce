import React from "react";

const Logo = ({ size = 50 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="20" width="40" height="20" rx="4" fill="#FF6F00" />
      <path
        d="M12 20 L8 12 H4"
        stroke="#E65100"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="44" r="4" fill="#333" />
      <circle cx="44" cy="44" r="4" fill="#333" />
      <line x1="20" y1="30" x2="44" y2="30" stroke="#FFF" strokeWidth="2" />
      <line x1="20" y1="34" x2="44" y2="34" stroke="#FFF" strokeWidth="2" />
    </svg>
  );
};

export default Logo;

