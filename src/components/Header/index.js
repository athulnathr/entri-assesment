import React from "react";
import Weather from "./Weather";
import "./styles.scss";
const Header = () => {
  return (
    <div className="d-flex jsb ac header">
      <h1>
        <span class="material-icons">sentiment_satisfied</span>
      </h1>
      <Weather />
    </div>
  );
};

export default Header;
