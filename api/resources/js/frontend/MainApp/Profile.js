import React, { useState, useEffect } from "react";
import "./styles/profile.scss";
import { MdEdit } from "react-icons/md";
import Uploader from "./components/Uploader";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SaveBtn from "./components/SaveBtn";
import axios from "axios";
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    }
}));

const Profile = () => {
    const [file, setFile] = useState([]);
    const [user, setUser] = useState({
        name: "",
        email: "",
        street: "",
        city: "",
        country: "",
        photo: "",
        lat: "",
        lng: "",
        equipment: ""
    });
    const [edit, setEdit] = useState(false);
    const classes = useStyles();

    const fetchDatas = async () => {
        const response = await fetch(`/api/profile`);
        const data = await response.json();
        setUser(prev => ({
            ...prev,
            name: data.user.name,
            email: data.user.email,
            street: data.user.street || "",
            city: data.user.city || "",
            country: data.user.country || "",
            photo: data.user.profile_photo
                ? data.user.profile_photo
                : "/uploads/profile-photos/user.png",
            lat: data.user.lat || "",
            lng: data.user.lng || "",
            equipment: ((data.equipment.length === 0)? "NA": data.equipment[0].name )
        }));
      setFile([data.user.profile_photo]);
  };

    useEffect(() => {
        fetchDatas();
    }, []);

    const handlePhoto = async (file) => {
        const data = new FormData();
        data.append('image', file, file.name);
        await axios.get("/sanctum/csrf-cookie");
        await axios
            .post("/api/users/savePhoto", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        fetchDatas();
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const key = process.env.MIX_GOOGLE_API_KEY;
        const encStreet = encodeURIComponent(user.street.trim());
        const encCity = encodeURIComponent(user.city.trim());
        const encCountry = encodeURIComponent(user.country.trim());
        let lat = user.lat;
        let lng = user.lng;
        await axios
            .get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encStreet},${encCity},${encCountry}&key=${key}`
            )
            .then(function(response) {
                console.log(response);
                lat = response.data.results[0].geometry.location.lat;
                lng = response.data.results[0].geometry.location.lng;
                setUser(prev => ({
                    ...prev,
                    lat: lat,
                    lng: lng
                }));
            });

        await axios.get("/sanctum/csrf-cookie");
        await axios
            .post("/api/users/update", { ...user, lat: lat, lng: lng })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        handlePhoto(file);
        
        setEdit(false);
    };

    if (edit) {
        return (
            <main>
                <Paper className="profile-form" elevation={3}>
                     <form className={classes.root} noValidate autoComplete="off">
                        <Uploader
                            file={file}
                            setFile={setFile}
                            image={user.photo}
                        />
                        <div className="prof-card__row">
                            <TextField
                                id="outlined-helperText"
                                label="Name"
                                value={user.name}
                                variant="outlined"
                                onChange={e =>
                                    setUser(prev => ({
                                        ...prev,
                                        name: e.target.value
                                    }))
                                }
                            />
                        </div>
                        <div className="prof-card__row">
                            <TextField
                                id="outlined-helperText"
                                label="Email"
                                variant="outlined"
                                value={user.email}
                                onChange={e =>
                                    setUser(prev => ({
                                        ...prev,
                                        email: e.target.value
                                    }))
                                }
                            />
                        </div>
                        <div className="prof-card__row">
                            <TextField
                                id="outlined-helperText"
                                label="Street"
                                value={user.street}
                                variant="outlined"
                                onChange={e =>
                                    setUser(prev => ({
                                        ...prev,
                                        street: e.target.value
                                    }))
                                }
                            />
                        </div>
                        <div className="prof-card__row">
                            <TextField
                                id="outlined-helperText"
                                label="City"
                                value={user.city}
                                variant="outlined"
                                onChange={e =>
                                    setUser(prev => ({
                                        ...prev,
                                        city: e.target.value
                                    }))
                                }
                            />
                        </div>
                        <div className="prof-card__row">
                            <TextField
                                id="outlined-helperText"
                                label="Country"
                                value={user.country}
                                variant="outlined"
                                onChange={e =>
                                    setUser(prev => ({
                                        ...prev,
                                        country: e.target.value
                                    }))
                                }
                            />
                        </div>
                        <div className="prof-card__row">
                        <TextField
                            id="outlined-helperText"
                            label="Equipment"
                            value={user.equipment}
                            variant="outlined"
                            onChange={e =>
                                setUser(prev => ({
                                    ...prev,
                                    equipment: e.target.value
                                }))
                            }
                             />
                        </div>
                        <SaveBtn handleSubmit={handleSubmit} />
                        </form>
                    </Paper>
            </main>
        );
    } else {
        return (
            <main>
                <Paper elevation={3} className="prof-card">
                    <img
                        className="prof-card__picture"
                        src={
                            user.photo
                                ? user.photo
                                : "/uploads/profile-photos/user.png"
                        }
                        alt={user.name}
                    />
                    <h2>{user.name}</h2>
                    <div className="prof-card__content">
                        <div className="prof-card__content__row">
                            <h3>EMAIL</h3>
                            <p>{user.email}</p>
                        </div>
                        <div  className="prof-card__content__row">
                            <h3>EQUIPMENT</h3>
                            <p>{user.equipment}</p>
                        </div>
                        <div  className="prof-card__content__row">
                            <h3>ADDRESS</h3>
                            {(user.street && user.city && user.country) === "" ? (
                                <p>NA</p>
                            ) : (
                                <p>
                                    {user.street}
                                    <br />
                                    {user.city}
                                    <br />
                                    {user.country}
                                    <br />
                                </p>
                            )}
                        </div>
                    </div>
                    <MdEdit className="edit-icon" onClick={() => setEdit(true)} />
                </Paper>
            </main>
        );
    }
};

export default Profile;
