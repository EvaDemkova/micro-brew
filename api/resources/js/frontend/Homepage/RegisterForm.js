import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    }
}));

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirm] = useState("");
    const { fetchUser } = useGlobalContext();
    const classes = useStyles();

    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();

        let request_data = {
            email,
            name,
            password,
            password_confirmation,
            profile_photo: "/uploads/profile-photos/user.png"
        };

        await axios.get(`/sanctum/csrf-cookie`);
        await axios
            .post(`/register`, request_data)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

        await axios
            .get("/api/user")
            .then(function(response) {
                if (response.status === 200) {
                    //The user is authenticated, redirect to /feed
                    fetchUser(response);
                    history.push("/feed");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <div className="user-form">
            <h3>REGISTER</h3>
            <form
                onSubmit={handleSubmit}
                className={classes.root}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-basic"
                    label="Name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    id="standard-basic"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    id="standard-password-input"
                    label="Confirm Password"
                    type="password"
                    value={password_confirmation}
                    onChange={e => setPasswordConfirm(e.target.value)}
                />
                <button className="btn">SUBMIT</button>
            </form>
        </div>
    );
};

export default RegisterForm;
