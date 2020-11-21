import React from "react";
import "./Marker.scss";

const Marker = props => {
    const { color, name, id, handleClick, user } = props;
    return (
        <div onClick={() => handleClick(user)}>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: "pointer" }}
                title={name}
            />
            <div className="pulse" />
        </div>
    );
};

export default Marker;
