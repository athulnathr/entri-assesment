import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector, updateFilter } from "../../store/filters/slice";
import NewsFeed from "./NewsFeed";
import Filters from "./NewsFeed/Filters";
import Weather from "./Weather";
const Home = () => {
  const applied = useSelector(filterSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    dispatch(
      updateFilter({
        filter: "language",
        value: userLang.toLowerCase().split("-")[0],
      })
    );
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <div className="d-flex jsb ac">
        <h1> Tech News </h1>
        <Weather />
      </div>
      <Filters />
      {applied?.search && <NewsFeed />}
    </div>
  );
};

export default Home;
