import React, { useState, useEffect } from "react";
import "./styles/profile.scss";
import { MdEdit } from "react-icons/md";
import Dropzone from "./components/BeerpostForm/Dropzone";
import Uploader from "./components/Uploader";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SaveBtn from "./components/SaveBtn";
import axios from "axios";

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
            equipment:
                data.equipment.legth === 0 ? data.equipment[0].name : "NA"
        }));
        setFile([data.user.profile_photo]);
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(file);
        const key = "AIzaSyB-pSa870-NrS2xwdl0Lc2GvPFmPJcAGLQ";
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
        console.log(user);

        await axios.get("/sanctum/csrf-cookie");
        await axios
            .post("/api/users/update", { ...user, lat: lat, lng: lng })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        setEdit(false);
    };

    if (edit) {
        return (
            <main>
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
            </main>
        );
    } else {
        return (
            <main className="prof-card">
                <img
                    className="prof-card__picture"
                    src={
                        user.photo
                            ? user.photo
                            : "/uploads/profile-photos/user.png"
                    }
                    alt={user.name}
                />
                {/* here comes dropzone or input for file */}
                <h2>{user.name}</h2>
                <div className="prof-card__row">
                    <h3>Email:</h3>
                    <p>{user.email}</p>
                </div>
                <div className="prof-car__row">
                    <h3>Address:</h3>
                    {(user.street && user.city && user.country) === null ? (
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
                <div className="prof-card__row">
                    <h3>Eqipment:</h3>
                    <p>{user.equipment}</p>
                </div>
                <MdEdit className="edit-icon" onClick={() => setEdit(true)} />
            </main>
        );
    }
};

export default Profile;
