import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import newsList, { getRelatedData } from "./newslist";

const News = () => {
  let params = useParams();
  console.log(params.newsId);
  let data = getRelatedData(params.newsId);
  return (
    <div>
      <p>{data.details}</p>
      <Link to="/">
        <Button>Back to home....</Button>
      </Link>
    </div>
  );
};

export default News;
