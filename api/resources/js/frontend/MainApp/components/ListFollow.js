import React from "react";
import "./styles/listFollow.scss";

const ListFollow = () => {
    return (
        <div className="list-follow">
            <h2>Who to follow</h2>
            <div className="user-card">
                <div className="user-card__infos">Joel</div>
                <div className="button-list">
                    <button>View Profile</button>
                    <button>Follow</button>
                </div>
            </div>
        </div>
    );
};

export default ListFollow;
