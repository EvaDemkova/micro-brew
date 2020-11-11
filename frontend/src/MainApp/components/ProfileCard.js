import React from 'react'
import './profileCard.scss'

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className='profile-card__photo'>
        <img
          src='https://vignette.wikia.nocookie.net/heros/images/4/42/Alice_Disney_Infobox.jpg/revision/latest/scale-to-width-down/310?cb=20200622124942&path-prefix=fr'
          alt=''
        />
      </div>
      <div className='profile-card__name'>Alice and Bob</div>
      <div className='profile-card__stats'>
        <div className='profile-card__item'>
          <h5>Following</h5>
          <p>20</p>
        </div>
        <div className='profile-card__item'>
          <h5>Followers</h5>
          <p>15</p>
        </div>
        <div className='profile-card__item'>
          <h5>Posts</h5>
          <p>8</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
