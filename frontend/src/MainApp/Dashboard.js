import React, { useState, useEffect} from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import ListBeerpost from './components/ListBeerpost'
import ProfileCard from './components/ProfileCard'
import BeerpostForm from './components/BeerpostForm/BeerpostForm';
import './styles/dashboard.scss'

const Dashboard = () => {
  const [isBeerpostForm, setIsBeerpostForm] = useState(false)

  
  if (isBeerpostForm === false) {
    return (
      <div className='dashboard'>
        <ProfileCard />
        <ListBeerpost />
        <BsFillPlusCircleFill className="plus-btn" onClick={()=>setIsBeerpostForm(true)} />
      </div>
    )
  }  

  if (isBeerpostForm) {
    return (
      <BeerpostForm isBeerpostForm={ isBeerpostForm} setIsBeerpostForm={setIsBeerpostForm} />
    )
  }
}

export default Dashboard
