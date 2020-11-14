import React from 'react'
import axios from 'axios'

const LikeBtn = ({ likes, beerpost_id }) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/beerposts/${beerpost_id}/like`

  const likeBtn = async () => {
    console.log('liked')
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/sanctum/csrf-cookie`)
    await axios
      .post(url, {
        user_id: '2',
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='likes' onClick={likeBtn}>
      Likes : {likes.length}
    </div>
  )
}

export default LikeBtn
