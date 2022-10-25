import React from "react";
import Article from "./Article";
import data from "../data.json";

function Main() {
  return (
    <div className="main">
      <p>Main</p>

      {data.hits.map(({ title, url, author }) => {
        return <Article title={title} url={url} author={author} />;
      })}
    </div>
  );
}

export default Main;
