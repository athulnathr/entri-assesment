import React from "react";

const LoadingUI = () => {
  return [...new Array(12)].map(() => <div className="loading">Loading</div>);
};

export default LoadingUI;
