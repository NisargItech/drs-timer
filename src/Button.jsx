import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  return (
    <button className="button">
      <FontAwesomeIcon icon={faPlus} size="2x" />
    </button>
  );
};

export default Button;
