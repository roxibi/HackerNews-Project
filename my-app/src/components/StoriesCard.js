import React from 'react'

function StoriesCard(story) {
    console.log("story",story.story.title);
  if(!story) return null;
  return (
    <div className='comment-card'>
      <h3><a href={story.story.url}>{story.story.title}</a></h3>
      <p> {story.story.author}</p>
      <p>{story.story.created_at}</p>
      
    </div>
  )
}

export default StoriesCard;
