import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";
import "./styles/profileCard.scss";

const ProfileCard = ({ id }) => {
    const [name, setName] = useState("");
    const [follows, setFollows] = useState("");
    const [followedBy, setFollowedBy] = useState("");
    const { user } = useGlobalContext();

    const fetchDatas = async () => {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        console.log(data);
        setName(data.name);
        setFollows(data.follows.length);
        setFollowedBy(data.followed_by.length);
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    const unFollow = async id => {
        await axios.get(`/sanctum/csrf-cookie`);
        await axios
            .post(`/api/users/delete_follow`, {
                id_to_unfollow: id
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <div className="profile-card">
            <div className="profile-card__photo">
                <img
                    src="https://vignette.wikia.nocookie.net/heros/images/4/42/Alice_Disney_Infobox.jpg/revision/latest/scale-to-width-down/310?cb=20200622124942&path-prefix=fr"
                    alt=""
                />
            </div>
            <div className="profile-card__name">{name}</div>
            <div className="profile-card__stats">
                <div className="profile-card__item">
                    <h5>Following</h5>
                    <p>{follows}</p>
                </div>
                <div className="profile-card__item">
                    <h5>Followers</h5>
                    <p>{followedBy}</p>
                </div>
                <div className="profile-card__item">
                    <h5>Posts</h5>
                    <p>8</p>
                </div>
            </div>
            {user.id != id && (
                <button onClick={() => unFollow(id)}>Unfollow :*</button>
            )}
        </div>
    );
};

export default ProfileCard;
