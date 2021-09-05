import React from "react";

const LoadingUI = () => {
  return [...new Array(12)].map((_, i) => (
    <div className="col-sm-6 col-lg-3 col-xs-12" key={`SingleFeedLoading_${i}`}>
      <div className="single-feed">
        <div className="image-holder">
          <div
            className="placeholder"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="content p-h">
          <div className="d-flex jsb ac bottom-detail mb-h">
            <div
              className="placeholder"
              style={{ width: "8rem", height: "1.2rem" }}
            />
            <div
              className="placeholder"
              style={{ width: "8rem", height: "1.2rem" }}
            />
          </div>
          <div
            className="placeholder"
            style={{ width: "100%", height: "1.4rem", marginBottom: "0.4rem" }}
          />
          <div
            className="placeholder"
            style={{ width: "40%", height: "1.4rem", marginBottom: "0.4rem" }}
          />
          <div className="excerpt">
            {[...new Array(4)]?.map(() => (
              <div
                className="placeholder"
                key={Math.random()}
                style={{
                  width: "100%",
                  height: "0.75rem",
                  marginBottom: "0.25rem",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default LoadingUI;
