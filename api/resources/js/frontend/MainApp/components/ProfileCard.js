import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";
import "./styles/profileCard.scss";
import { useDashboardContext } from "../dashboardContext";

const ProfileCard = ({ id }) => {
    const [name, setName] = useState("");
    const [follows, setFollows] = useState("");
    const [followedBy, setFollowedBy] = useState("");
    const [photo, setPhoto] = useState("");
    const [nbPosts, setNbPosts] = useState(0);
    const { user } = useGlobalContext();
    const { isLoading } = useDashboardContext();

    const fetchDatas = async () => {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setName(data.user.name || "");
        setFollows(data.user.follows.length);
        setFollowedBy(data.user.followed_by.length);
        setPhoto(data.user.profile_photo);
        setNbPosts(data.nb_beerposts);
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

    if (isLoading) {
        return <div></div>;
    }
    return (
        <div className="profile-card">
            <div className="profile-card__photo">
                <img
                    src={photo ? photo : "/uploads/profile-photos/user.png"}
                    alt={name}
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
                    <p>{nbPosts}</p>
                </div>
            </div>
            {user.id != id && (
                <button onClick={() => unFollow(id)}>Unfollow :*</button>
            )}
        </div>
    );
};

export default ProfileCard;
