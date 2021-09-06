import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector, updateFilter } from "../../store/filters/slice";
import NewsFeed from "./NewsFeed";
import Filters from "./NewsFeed/Filters";
import Header from "../../components/Header";
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
    <>
      <Header />
      <div className="container-fluid">
        <Filters />
        {applied?.search && <NewsFeed />}
      </div>
    </>
  );
};

export default Home;
