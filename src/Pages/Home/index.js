import React from "react";
import NewsFeed from "./NewsFeed";
import Weather from "./Weather";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex jsb ac">
        <h1> Tech News </h1>
        <Weather />
      </div>
      <NewsFeed />
    </div>
  );
};

export default Home;
