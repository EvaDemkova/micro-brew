import React, { useState, useEffect } from 'react';
import './styles/profile.scss';
import { MdEdit } from "react-icons/md";
import Dropzone from './components/BeerpostForm/Dropzone';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Profile = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [equipment, setEquipment] = useState('');
  const [photo, setPhoto] = useState('');
  const [edit, setEdit] = useState(true);
  const classes = useStyles();

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
    setFiles([data.user.profile_photo]);
  };
  
  useEffect(() => {
    fetchDatas();
  }, [])

  if (edit) {

    return (
      <main>
        <form className={classes.root} noValidate autoComplete="off">
        <Dropzone className="prof-card__dropzone" files={files} setFiles={ setFiles}/>
        <TextField
          id="outlined-helperText"
          label="Name"
          defaultValue="Name"
          value={ name}
          variant="outlined"
          />
        <div className="prof-card__row">
           <TextField
          id="outlined-helperText"
          label="Email"
          defaultValue="Email"
          value={email}
          variant="outlined"
          />
        </div>

        
        </form>
      </main>
    )
    
  } else {
    return (
      <main className="prof-card">
        <img className="prof-card__picture" src={photo} alt="" />
        {/* here comes dropzone or input for file */}
          <h2>{ name}</h2>
        <div className="prof-card__row">
          <h3>Email:</h3>
          <p>{ email}</p>
        </div>
        <div className="prof-car__row">
          <h3>Address:</h3>
        {
          (( street  && city && country) === null)
          ?
          <p>NA</p>
          :
          <p>
            {street}<br />
            {city}<br />
            {country}<br/>
            </p>   
        }
        </div>
        <div className="prof-card__row">
          <h3>Eqipment:</h3>
          <p>{equipment}</p>
        </div>
        <MdEdit/>
      </main>
    )
  }
  
}

export default Profile
