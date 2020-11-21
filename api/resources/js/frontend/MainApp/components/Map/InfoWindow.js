import React from "react";
import { Link } from "react-router-dom";
import "./infoWindow.scss";

const InfoWindow = ({ name, id }) => {
    return (
        <div className="info-window">
            <h3>{name}</h3>
            <Link to={`/dashboard/${id}`}>View Profile</Link>
        </div>
    );
};

export default InfoWindow;
