import React, { useState } from 'react'
import axios from 'axios'
import Comment from './Comment'
import { useGlobalContext } from '../../context'

const ListComments = ({ comments, beerpost_id }) => {
  const [comment, setComment] = useState('')
  const user = useGlobalContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/sanctum/csrf-cookie`)
    const url = `${process.env.REACT_APP_SERVER_URL}/api/beerposts/comment/`
    await axios
      .post(url, {
        beerpost_id: beerpost_id,
        user_id: user.id,
        text: comment,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      <form onSubmit={handleSubmit}>
        <textarea
          name=''
          id=''
          cols='10'
          rows='10'
          placeholder='your comment...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button>Post your comment</button>
      </form>
    </div>
  )
}

export default ListComments
