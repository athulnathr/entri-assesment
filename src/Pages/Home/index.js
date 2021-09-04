import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsSelector, requestNews } from "./slice";
import SingleFeed from "./SingleFeed";

const News = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector(newsSelector);
  useEffect(() => {
    dispatch(requestNews());
  }, []);
  return (
    <div className="main">
      <h4> Sniper tests rerender test again </h4>
      {data?.articles?.map((item, i) => (
        <SingleFeed key={`SingleFeed_${i}`} article={item} />
      ))}
    </div>
  );
};

export default News;
