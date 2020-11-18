import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";
import "./styles/profileCard.scss";

const ProfileCard = ({ id }) => {
    const [name, setName] = useState("");
    const [follows, setFollows] = useState("");
    const [followedBy, setFollowedBy] = useState("");
    const { user } = useGlobalContext();
    const [photo, setPhoto] = useState("");

    const fetchDatas = async () => {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setName(data.name);
        setFollows(data.follows.length);
        setFollowedBy(data.followed_by.length);
        setPhoto(data.profile_photo);
    };

    useEffect(() => {
        fetchDatas();
    }, [id]);

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
                <img src={photo} alt="" />
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
                    <p>9</p>
                </div>
            </div>
            {user.id != id && (
                <button onClick={() => unFollow(id)}>Unfollow :*</button>
            )}
        </div>
    );
};

export default ProfileCard;
