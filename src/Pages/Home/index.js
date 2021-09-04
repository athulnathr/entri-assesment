import React, { useState } from "react";

const News = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <h4> Sniper tests rerender test again S{count}</h4>
      <button onClick={() => setCount(count + 1)}> count test</button>
    </div>
  );
};

export default News;
