import React from 'react'

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.user.name}: {comment.text}
    </div>
  )
}

export default Comment
