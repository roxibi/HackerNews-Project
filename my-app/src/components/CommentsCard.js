import React from 'react'

function CommentsCard({comment}) {
  if(!comment.comment_text) return null;
  return (
    <div className='comment-card'>
      <h3>{comment.comment_text}</h3>
      <p>Author: {comment.author}</p>
      <p>{comment.created_at}</p>
      
    </div>
  )
}

export default CommentsCard;
