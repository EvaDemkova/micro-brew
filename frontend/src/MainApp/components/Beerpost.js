import React from 'react'

const Beerpost = () => {
  return (
    <div className='beerpost'>
      <div className='beerpost__preview'>
        <div className='left-menu'>
          <div className='user-info'>photo</div>
          <div className='updated-time'>Posted : 3 hours ago</div>
        </div>
        <div className='preview-info'>
          <div className='beerpost__header'>
            <div className='logo'>X</div>
            <div className='title'>
              <h3>My great beer</h3>
              <p>I made this nice Lager with love</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beerpost
