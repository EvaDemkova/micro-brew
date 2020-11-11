import React from 'react'
import ListBeerpost from './components/ListBeerpost'
import ProfileCard from './components/ProfileCard'
import './styles/dashboard.scss'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <ProfileCard />
      <ListBeerpost />
    </div>
  )
}

export default Dashboard
