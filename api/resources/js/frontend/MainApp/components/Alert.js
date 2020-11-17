import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useGlobalContext } from "../../context";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2)
        },
        position: "absolute",
        zIndex: 10
    }
}));

const AlertPop = () => {
    const classes = useStyles();
    const { alert, resetAlert } = useGlobalContext();

    useEffect(() => {
        const timeout = setTimeout(() => {
            resetAlert();
            console.log("reset");
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    console.log(alert);
    return (
        <div className={classes.root}>
            {alert.isAlert && (
                <Alert severity={alert.type}>{alert.message}</Alert>
            )}
        </div>
    );
};

export default AlertPop;

// type of alert: success, info, warning, error
