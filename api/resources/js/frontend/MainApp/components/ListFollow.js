import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/listFollow.scss";
import { useDashboardContext } from "../dashboardContext";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn: {
        margin: '0.5em 0', 
        color: '#fec63d'
    },
}));

const ListFollow = () => {
    const [followList, setFollowList] = useState([]);
    const { isBeerListRender, isLoading, addFollow } = useDashboardContext();
    const classes = useStyles();
    
    const fetchFollowList = async () => {
        const response = await fetch(`/api/users/follow_list_proposal`);
        const data = await response.json();
        setFollowList(data);
    };

    useEffect(() => {
        fetchFollowList();
    }, [isBeerListRender]);

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
                                    variant="contained"
                                    // color="primary"
                                    style={{  
                                        backgroundColor: "grey",
                                        fontSize: '0.7em',
                                        color: 'white',
                                        marginLeft: '0.5em',
                                        marginTop: '0.5em',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    View Profile
                                </Button>
                            </Link>
                            <Button
                                variant="contained"
                                style={{  
                                        backgroundColor: "#fec63d",
                                        fontSize: '0.7em',
                                        marginLeft: '0.5em',
                                        marginTop: '0.5em',
                                        fontWeight: 'bold'
                                    }}
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
