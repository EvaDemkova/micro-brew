import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context";
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

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { fetchUser } = useGlobalContext();
    const history = useHistory();
     const classes = useStyles();

    const handleSubmit = async e => {
        e.preventDefault();

        await axios.get(`/sanctum/csrf-cookie`);

        await axios
            .post(`/login`, {
                email,
                password
            })
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
            <h3>LOGIN</h3>
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <div className="inputs">
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
                </div>
                <button className="btn">SUBMIT</button>
            </form>
        </div>
    );
};

export default LoginForm;
