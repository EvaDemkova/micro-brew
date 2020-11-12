import React, { useEffect, useState } from 'react'
import Beerpost from './Beerpost/Beerpost'
import './listBeerpost.scss'

const ListBeerpost = () => {
  const [beerposts, setBeerposts] = useState([])

  const fetchDatas = async () => {
    const url = 'http://www.microbrew.test/api/beerposts/users/2'
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
