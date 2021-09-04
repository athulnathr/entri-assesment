import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { requestNews } from "./slice";

const News = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestNews());
  }, []);

  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <h4> Sniper tests rerender test again S{count}</h4>
      <button onClick={() => setCount(count + 1)}> count test</button>
    </div>
  );
};

export default News;
