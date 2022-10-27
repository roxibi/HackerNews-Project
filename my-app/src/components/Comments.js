import React from "react";
import Article from "./Article";
import data from "../data.json";
import DataComments from "../components/DataComments.json"


function Comments() {
  return (
    <div className="main">
      <p>Main</p>

      {DataComments.hits.comment_text(({ comment_text: comment_text }) => {
        return <p>{comment_text}</p>;
      })}

      
    </div>
  );
}

export default Comments;
