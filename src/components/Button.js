import React from "react";
import "../App.css";

const Button = ({ buttonDisplayName, clickHandler }) => {
  return (
    <button className="btn" onClick={clickHandler}>
      {buttonDisplayName}
    </button>
  );
};

export default Button;
