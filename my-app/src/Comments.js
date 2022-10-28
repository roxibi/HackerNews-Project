import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import CommentsCard from "./components/CommentsCard";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://hn.algolia.com/api/v1/search?query=bar&tags=comment"
        );
        const { hits, nbpages } = data;
        setComments(hits);
        setTotalComments(nbpages);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Comments</h1>
      <div className="comment-container">
        {isLoading ? (
          <p>isLoading....</p>
        ) : (
            comments.map((comment) => (
            <CommentsCard comment={comment} key={comment.objectID} />
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;