import React from 'react'
import ListBeerpost from './components/ListBeerpost'
import ProfileCard from './components/ProfileCard'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <ProfileCard />
      <ListBeerpost />
    </div>
  )
}

export default Dashboard
