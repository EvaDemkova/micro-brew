import React, { useState } from 'react'
import { IoMdBeer } from 'react-icons/io'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import './beerpost.scss'
import BeerpostExtend from './BeerpostExtend'
import LikeBtn from '../LikeBtn'
import { ebcToColor } from './ebcToColor'

const Beerpost = ({ data }) => {
  const {
    id,
    beer_name,
    type,
    abv,
    batch_volume,
    carbonation,
    description,
    ebc,
    gravity,
    ibu,
    og,
    status,
    user,
    likes,
  } = data
  const [isExtended, setIsExtended] = useState(false)

  const extendsBeerpost = () => {
    setIsExtended(!isExtended)
  }

  return (
    <div className='beerpost'>
      <div className='beerpost__preview'>
        <div className='left-menu'>
          <div className='user-info'>
            <img
              src='https://vignette.wikia.nocookie.net/heros/images/4/42/Alice_Disney_Infobox.jpg/revision/latest/scale-to-width-down/310?cb=20200622124942&path-prefix=fr'
              alt=''
            />
            <p>{user.name}</p>
          </div>
          <div className='updated-time'>Posted : 3 hours ago</div>
          <LikeBtn likes={likes} beerpost_id={id} />
        </div>
        <div className='preview-info'>
          <div className='header'>
            <div className='logo'>
              <IoMdBeer style={{ color: ebcToColor(ebc) }} />
            </div>
            <div className='title'>
              <h3>{beer_name}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className='status'>Status {status}</div>
          <div className='type'>Type - {type}</div>
          <div className='stats'>
            <ul>
              <li>ABV - {abv}</li>
              <li>OG - {og}</li>
              <li>EBC - {ebc}</li>
              <li>IBU - {ibu}</li>
              <li>Carbonation - {carbonation}</li>
              <li>Gravity -{gravity}</li>
              <li>Batch Volume - {batch_volume}</li>
            </ul>
          </div>
        </div>
        <div className='beerpost__photos'></div>
      </div>
      <div className='arrow_down' onClick={extendsBeerpost}>
        {isExtended ? <FaArrowUp /> : <FaArrowDown />}
      </div>
      {isExtended && <BeerpostExtend data={data} />}
    </div>
  )
}

export default Beerpost