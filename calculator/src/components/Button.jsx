import React from "react";

const Button = ({ onClick, className, text, ...props }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
