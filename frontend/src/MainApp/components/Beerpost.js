import React from 'react'
import { IoMdBeer } from 'react-icons/io'
import './beerpost.scss'

const Beerpost = ({ data }) => {
  console.log(data)
  const {
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
  } = data
  return (
    <div className='beerpost'>
      <div className='beerpost__preview'>
        <div className='left-menu'>
          <div className='user-info'>
            <img
              src='https://vignette.wikia.nocookie.net/heros/images/4/42/Alice_Disney_Infobox.jpg/revision/latest/scale-to-width-down/310?cb=20200622124942&path-prefix=fr'
              alt=''
            />
            <p>Alice and Bob</p>
          </div>
          <div className='updated-time'>Posted : 3 hours ago</div>
        </div>
        <div className='preview-info'>
          <div className='header'>
            <div className='logo'>
              <IoMdBeer />
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
        <div className='beerpost__photos'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/d/da/Pilsner_urquell_mug.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Beerpost
