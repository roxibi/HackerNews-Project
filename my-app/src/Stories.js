import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import StoriesCard from "./components/StoriesCard";

function Stories() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalStories, setTotalStories] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://hn.algolia.com/api/v1/search_by_date?tags=story"
        );
        const { hits, nbpages } = data;
        setStories(hits);
        setTotalStories(nbpages);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Stories</h1>
      <div className="comment-container">
        {isLoading ? (
          <p>isLoading....</p>
        ) : (
            stories.map((story) => ( 
            <StoriesCard story={story} key={story.created_at} />
          ))
        )}
      </div>
    </div>
  );
}

export default Stories;