import React from "react";
import "./styles.scss";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="holder">
        <h1>404</h1>
        <h4>Page Not Found</h4>

        <button className="retry" onClick={() => (window.location.href = "/")}>
          Go Home <span class="material-icons">house</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
