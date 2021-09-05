import React from "react";
import { humanDiffDate } from "../../../Utils";
const SingleFeed = ({ article }) => {
  return (
    <div className="col-sm-6 col-lg-3 col-xs-12">
      <div className="single-feed">
        <div className="image-holder">
          <img src={article?.urlToImage} alt="" />
        </div>
        <div className="content p-h">
          <div className="d-flex jsb ac bottom-detail mb-h">
            <p className="author" title={article?.author}>
              {article?.author || "Unknown"}
            </p>
            <p className="diff">{humanDiffDate(article?.publishedAt)}</p>
          </div>
          <a
            href={article?.url}
            target="_blank"
            rel="noreferrer"
            className="title"
          >
            {article?.title}
          </a>
          <p className="excerpt">{article?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeed;
