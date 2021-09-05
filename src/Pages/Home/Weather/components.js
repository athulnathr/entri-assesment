import React from "react";

export const LoadingUI = () => {
  return (
    <div className="weather" title="Loading">
      <div className="icons">
        <div
          className="placeholder"
          style={{ width: "3rem", height: "3rem" }}
        />
      </div>
      <div className="details ml-h">
        <div
          className="placeholder"
          style={{ width: "5rem", height: "0.9rem" }}
        />
        <div
          className="placeholder"
          style={{ width: "4rem", height: "1.2rem" }}
        />
      </div>
    </div>
  );
};

export const ErrorUI = ({ retry }) => {
  return (
    <div className="weather">
      <h3 className="m-0">No info</h3>
      <button
        className="retry ml-h"
        title="Retry"
        onClick={() => (retry ? retry() : null)}
      >
        <span className="material-icons">refresh</span>
      </button>
    </div>
  );
};
