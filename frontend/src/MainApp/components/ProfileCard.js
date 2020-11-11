import React from 'react'

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className='profile-card__photo'>Photo</div>
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
