import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useGlobalContext } from '../../context'

const LikeBtn = ({ likes, beerpost_id }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [nbLikes, setNbLikes] = useState(likes.length)
  const user = useGlobalContext()

  //create array of all user_id who liked the post
  const user_id_like = []
  likes.map((like) => user_id_like.push(like.user_id))
  console.log(user_id_like)

  useEffect(() => {
    if (user_id_like.indexOf(user.id) !== -1) {
      setIsLiked(true)
    }
  }, [])

  const likeBtn = async () => {
    console.log('liked')
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/sanctum/csrf-cookie`)

    // New like is inserted if the post is not liked yet
    if (!isLiked) {
      const url = `${process.env.REACT_APP_SERVER_URL}/api/beerposts/${beerpost_id}/like`
      await axios
        .post(url, {
          user_id: user.id,
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      setNbLikes(nbLikes + 1)
      setIsLiked(true)
    }
  }

  return (
    <div className='likes' onClick={likeBtn}>
      Likes : {nbLikes} {isLiked ? 'true' : 'false'}
    </div>
  )
}

export default LikeBtn
