import React, { useState, useEffect } from "react";
import "./styles/profile.scss";
import { MdEdit } from "react-icons/md";
import Uploader from "./components/Uploader";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SaveBtn from "./components/SaveBtn";
import axios from "axios";
import { Paper } from "@material-ui/core";
import Loader from "./components/Loader";
import { useGlobalContext } from "../context.js";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    }
}));

const Profile = () => {
    //context
    const { createAlert, setCoordinates } = useGlobalContext();

    //useStates
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
    const [isLoading, setIsLoading] = useState(true);

    //useStyles
    const classes = useStyles();

    //data fetching function
    const fetchDatas = async () => {
        setIsLoading(true);
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
            equipment: data.equipment.length === 0 ? "" : data.equipment[0].name
        }));
        setFile([data.user.profile_photo]);
        setIsLoading(false);
    };

    //first data fetch
    useEffect(() => {
        fetchDatas();
    }, []);

    const handlePhoto = async file => {
        console.log(file);
        const data = new FormData();
        data.append("image", file, file.name);
        await axios.get("/sanctum/csrf-cookie");
        await axios
            .post("/api/users/savePhoto", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response => {
                console.log(response);
                createAlert("success", `Profile photo saved`);
            })
            .catch(function(error) {
                console.log(error);
            });
        fetchDatas();
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        const key = process.env.MIX_GOOGLE_API_KEY;
        const encStreet = encodeURIComponent(user.street.trim());
        const encCity = encodeURIComponent(user.city.trim());
        const encCountry = encodeURIComponent(user.country.trim());
        let lat = user.lat;
        let lng = user.lng;

        if (user.street !== "" && user.street !== "" && user.country !== "") {
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
                    setCoordinates(lat, lng);
                });
        }

        await axios.get("/sanctum/csrf-cookie");
        await axios
            .post("/api/users/update", { ...user, lat: lat, lng: lng })
            .then(function(response) {
                createAlert("success", `Changes saved`);
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        console.log(file[0]);
        console.log([`${user.photo}`]);

        if (file[0] != user.photo) {
            handlePhoto(file);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        setEdit(false);
    };

    if (isLoading) {
        return <Loader />;
    }

    if (edit) {
        return (
            <main>
                <Paper className="profile-form" elevation={3}>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="profile-form__alignment">
                            <Uploader
                                className="profile-form__alignment__uploader"
                                file={file}
                                setFile={setFile}
                                image={user.photo}
                            />
                            <div className="profile-form__alignment__name">
                                <h3>NAME</h3>
                                <TextField
                                    id="outlined-helperText"
                                    label="Name"
                                    value={user.name}
                                    variant="outlined"
                                    size="small"
                                    onChange={e =>
                                        setUser(prev => ({
                                            ...prev,
                                            name: e.target.value
                                        }))
                                    }
                                />
                            </div>
                            <div className="profile-form__alignment__content">
                                <div className="profile-form__alignment__content__row">
                                    <h3>EMAIL</h3>
                                    <TextField
                                        id="outlined-helperText"
                                        label="Email"
                                        variant="outlined"
                                        value={user.email}
                                        size="small"
                                        onChange={e =>
                                            setUser(prev => ({
                                                ...prev,
                                                email: e.target.value
                                            }))
                                        }
                                    />
                                </div>
                                <div className="profile-form__alignment__content__row">
                                    <h3>EQUIPMENT</h3>
                                    <TextField
                                        id="outlined-helperText"
                                        label="Equipment"
                                        value={user.equipment}
                                        variant="outlined"
                                        size="small"
                                        onChange={e =>
                                            setUser(prev => ({
                                                ...prev,
                                                equipment: e.target.value
                                            }))
                                        }
                                    />
                                </div>
                                <div className="profile-form__alignment__content__row">
                                    <h3>ADDRESS</h3>
                                    <TextField
                                        id="outlined-helperText"
                                        label="Street"
                                        value={user.street}
                                        variant="outlined"
                                        size="small"
                                        onChange={e =>
                                            setUser(prev => ({
                                                ...prev,
                                                street: e.target.value
                                            }))
                                        }
                                    />
                                </div>
                                <div className="profile-form__alignment__content__row">
                                    <TextField
                                        id="outlined-helperText"
                                        label="City"
                                        value={user.city}
                                        variant="outlined"
                                        size="small"
                                        onChange={e =>
                                            setUser(prev => ({
                                                ...prev,
                                                city: e.target.value
                                            }))
                                        }
                                    />
                                </div>
                                <div className="profile-form__alignment__content__row">
                                    <TextField
                                        id="outlined-helperText"
                                        label="Country"
                                        value={user.country}
                                        variant="outlined"
                                        size="small"
                                        onChange={e =>
                                            setUser(prev => ({
                                                ...prev,
                                                country: e.target.value
                                            }))
                                        }
                                    />
                                </div>
                            </div>
                            <SaveBtn handleSubmit={handleSubmit} />
                        </div>
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
                        <div className="prof-card__content__row">
                            <h3>EQUIPMENT</h3>
                            <p>
                                {user.equipment === "" ? (
                                    <p>NA</p>
                                ) : (
                                    <p>{user.equipment}</p>
                                )}
                            </p>
                        </div>
                        <div className="prof-card__content__row">
                            <h3>ADDRESS</h3>
                            {(user.street && user.city && user.country) ===
                            "" ? (
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
                    <MdEdit
                        className="edit-icon"
                        onClick={() => setEdit(true)}
                    />
                </Paper>
            </main>
        );
    }
};

export default Profile;
