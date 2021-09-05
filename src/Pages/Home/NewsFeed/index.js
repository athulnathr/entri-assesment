import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { newsSelector, requestNews, setPage } from "./slice";
import SingleFeed from "./SingleFeed";
import LoadingUI from "./LoadingUI";
import "./styles.scss";
const News = () => {
  const dispatch = useDispatch();
  const { loading, data, page } = useSelector(newsSelector);
  useEffect(() => {
    dispatch(requestNews());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll(e) {
    const offset = window.scrollY;
    const body = document.getElementsByTagName("body")[0];
    if (offset > body.scrollHeight * 0.7 && !loading) {
      // to start fetching when scroll is approx 70%
      batch(() => {
        dispatch(setPage(page + 1));
        dispatch(requestNews(page + 1));
      });
    }
  }

  return (
    <div className="container-fluid">
      <h4> Sniper tests rerender test again </h4>
      <div className="row">
        {data?.articles?.map((item, i) => (
          <SingleFeed key={`SingleFeed_${i}`} article={item} />
        ))}
        {loading && <LoadingUI />}
      </div>
    </div>
  );
};

export default News;
