import React, { useState, useEffect } from 'react';
import './styles/profile.scss';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [equipment, setEquipment] = useState('');
  const [photo, setPhoto] = useState('');
  const [edit, setEdit] = useState(false);

  const fetchDatas = async () => {
        const response = await fetch(`/api/profile`);
    const data = await response.json();
    console.log(data);
    setName(data.user.name);
    setEmail(data.user.email);
    setStreet(data.user.street);
    setCity(data.user.city);
    setCountry(data.user.country);
    setPhoto(data.user.profile_photo);
    setEquipment(data.equipment[0].name);
  };
  
  useEffect(() => {
    fetchDatas();
  }, [])

  
  return (
    <main className="prof-card">
      <img className="profile-picture" src={photo} alt="" />
      {/* here comes dropzone or input for file */}
      


      
    </main>
  )
  
}

export default Profile
