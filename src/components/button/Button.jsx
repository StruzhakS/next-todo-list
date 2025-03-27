import React from "react";

const Button = ({ onClick, text, styles }) => {
  return (
    <button className={styles} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
