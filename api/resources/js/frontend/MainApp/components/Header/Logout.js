import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useWindowWidth from "../useWindowWidth";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }, 
});

const Logout = () => {
    const history = useHistory();
    const width = useWindowWidth();
    const classes = useStyles();

    const handleSubmit = async event => {
        event.preventDefault();
        await axios.post("/logout");
        history.push("/");
    };

    if (width <= 700) {
        return (
            <div>
                <a className={ classes.root} href="#" onClick={handleSubmit}>
                Logout
            </a>
        </div>
        )
    } else {
        return (
            <div>
                <a href="#" onClick={handleSubmit}>
                    Logout
                </a>
            </div>
        );

    }
};

export default Logout;
