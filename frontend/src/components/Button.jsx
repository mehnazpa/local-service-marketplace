import React from "react";

function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`nh-button ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;