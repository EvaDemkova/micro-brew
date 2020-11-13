import React, { useEffect, useState } from 'react'
import Beerpost from './Beerpost/Beerpost'
import './listBeerpost.scss'

const ListBeerpost = ({ url }) => {
  const [beerposts, setBeerposts] = useState([])

  const fetchDatas = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setBeerposts(data)
  }

  useEffect(() => {
    fetchDatas()
  }, [])

  return (
    <div className='listBeerpost'>
      {beerposts.map((beerpost) => (
        <Beerpost key={beerpost.id} data={beerpost} />
      ))}
    </div>
  )
}

export default ListBeerpost
