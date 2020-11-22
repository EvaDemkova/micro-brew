import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./infoWindow.scss";

const InfoWindow = ({ name, id }) => {
    return (
        <div className="info-window">
            <h3>{name}</h3>
            <Link to={`/dashboard/${id}`}>
                <Button variant="contained" color="primary">
                    View Profile
                </Button>
            </Link>
        </div>
    );
};

export default InfoWindow;
