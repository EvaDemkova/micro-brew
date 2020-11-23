import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/listFollow.scss";
import { useGlobalContext } from "../../context";
import { useDashboardContext } from "../dashboardContext";
import { Button } from "@material-ui/core";

const ListFollow = () => {
    const [followList, setFollowList] = useState([]);
    const { createAlert } = useGlobalContext();
    const { setIsBeerListRender, isLoading } = useDashboardContext();

    const fetchFollowList = async () => {
        const response = await fetch(`/api/users/follow_list_proposal`);
        const data = await response.json();
        setFollowList(data);
    };

    useEffect(() => {
        fetchFollowList();
    }, []);

    const addFollow = async (id, name) => {
        await axios.get(`/sanctum/csrf-cookie`);
        await axios
            .post(`/api/users/add_follow`, {
                id_to_follow: id
            })
            .then(function(response) {
                createAlert("success", `You are now following ${name}`);
                setIsBeerListRender(true);
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
        <div className="list-follow">
            <h2>Other Brewers</h2>
            {followList.map(user => {
                return (
                    <div key={user.id} className="user-card">
                        <div className="user-card__photo">
                            <img
                                src={
                                    user.profile_photo ||
                                    "/uploads/profile-photos/user.png"
                                }
                                alt={name}
                            />
                        </div>
                        <div className="user-card__infos">{user.name}</div>
                        <div className="button-list">
                            <Link to={`/dashboard/${user.id}`}>
                                <Button
                                    //variant="contained"
                                    color="primary"
                                >
                                    View Profile
                                </Button>
                            </Link>
                            <Button
                                //variant="contained"
                                color="primary"
                                onClick={() => addFollow(user.id, user.name)}
                            >
                                Follow
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListFollow;
