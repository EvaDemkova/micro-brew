import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";
import "./styles/profileCard.scss";
import { useDashboardContext } from "../dashboardContext";
import { Button } from "@material-ui/core";

const ProfileCard = ({ id }) => {
    const [name, setName] = useState("");
    const [follows, setFollows] = useState("");
    const [followedBy, setFollowedBy] = useState([]);
    const [photo, setPhoto] = useState("");
    const [nbPosts, setNbPosts] = useState(0);
    const { user } = useGlobalContext();
    const {
        isLoading,
        addFollow,
        isBeerListRender,
        setIsBeerListRender
    } = useDashboardContext();

    const fetchDatas = async () => {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setName(data.user.name || "");
        setFollows(data.user.follows.length);
        setFollowedBy(data.user.followed_by);
        setPhoto(data.user.profile_photo);
        setNbPosts(data.nb_beerposts);
        setFollowedBy(data.user.followed_by);
    };

    useEffect(() => {
        fetchDatas();
    }, [id, isBeerListRender]);

    const unFollow = async id => {
        await axios.get(`/sanctum/csrf-cookie`);
        await axios
            .post(`/api/users/delete_follow`, {
                id_to_unfollow: id
            })
            .then(function(response) {
                console.log(response);
                setIsBeerListRender(true);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    console.log(followedBy.map(item => item.id).indexOf(user.id));
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
                    <p>{followedBy.length}</p>
                </div>
                <div className="profile-card__item">
                    <h5>Posts</h5>
                    <p>{nbPosts}</p>
                </div>
            </div>
            {user.id != id &&
                (followedBy.map(item => item.id).indexOf(user.id) === -1 ? (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addFollow(id, name)}
                    >
                        Follow
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => unFollow(id)}
                    >
                        Unfollow
                    </Button>
                    // <button onClick={() => unFollow(id)}>Unfollow :*</button>
                ))}
        </div>
    );
};

export default ProfileCard;
