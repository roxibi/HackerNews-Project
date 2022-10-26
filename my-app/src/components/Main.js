import React from "react";
import Article from "./Article";
import data from "../data.json";


function Main() {
  //title is renamed as t to show that title is the property name and t is the property value.
  // {data.hits.map(({ title: t, url, author }) => {
  //  return <Article title={t} url={url} author={author} />;
  //  })}



  return (
    <div className="main">
      <p>Main</p>

      {data.hits.map(({ title: t, url, author }) => {
        return <Article title={t} url={url} author={author} />;
      })}

      
    </div>
  );
}

export default Main;
