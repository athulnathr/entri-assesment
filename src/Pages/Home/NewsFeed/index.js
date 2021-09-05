import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsSelector, requestNews } from "./slice";
import SingleFeed from "./SingleFeed";
import LoadingUI from "./LoadingUI";
import "./styles.scss";
const News = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector(newsSelector);
  useEffect(() => {
    dispatch(requestNews());
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <h4> Sniper tests rerender test again </h4>
      <div className="row">
        {loading ? (
          <LoadingUI />
        ) : (
          data?.articles?.map((item, i) => (
            <SingleFeed key={`SingleFeed_${i}`} article={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default News;
