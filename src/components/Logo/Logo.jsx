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
      <rect
        x="8"
        y="24"
        width="48"
        height="16"
        rx="8"
        fill="#FF6F00"
        stroke="#E65100"
        strokeWidth="2"
      />

      <circle cx="48" cy="28" r="3" fill="#FFF" />
      <circle cx="52" cy="32" r="3" fill="#FFF" />
      <circle cx="48" cy="36" r="3" fill="#FFF" />
      <circle cx="44" cy="32" r="3" fill="#FFF" />

      <rect x="14" y="28" width="8" height="2" fill="#FFF" />
      <rect x="17" y="25" width="2" height="8" fill="#FFF" />
    </svg>
  );
};

export default Logo;
