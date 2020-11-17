import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/listFollow.scss";
import { useGlobalContext } from "../../context";

const ListFollow = () => {
    const [followList, setFollowList] = useState([]);
    const { createAlert } = useGlobalContext();
    const fetchFollowList = async () => {
        const response = await fetch(`/api/users/follow_list_proposal`);
        const data = await response.json();
        setFollowList(data);
    };

    useEffect(() => {
        fetchFollowList();
    }, []);

    const addFollow = async id => {
        await axios.get(`/sanctum/csrf-cookie`);
        await axios
            .post(`/api/users/add_follow`, {
                id_to_follow: id
            })
            .then(function(response) {
                createAlert("success", "Follow OK");
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

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
                            <button onClick={() => addFollow(user.id)}>
                                Follow
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListFollow;
