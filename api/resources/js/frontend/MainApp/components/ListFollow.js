import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/listFollow.scss";

const ListFollow = () => {
    const [followList, setFollowList] = useState([]);

    const fetchFollowList = async () => {
        const response = await fetch(`/api/users/follow_list_proposal`);
        const data = await response.json();
        setFollowList(data);
    };
    console.log(followList);
    useEffect(() => {
        fetchFollowList();
    }, []);

    return (
        <div className="list-follow">
            <h2>Who to follow</h2>
            {followList.map(user => {
                return (
                    <div key={user.id} className="user-card">
                        <div className="user-card__infos">{user.name}</div>
                        <div className="button-list">
                            <Link to={`/dashboard/${user.id}`}>
                                View Profile
                            </Link>
                            <button>View Profile</button>
                            <button>Follow</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListFollow;
