import React, { useState } from "react";
import { useGlobalContext } from "../context";
import ListBeerpost from "./components/ListBeerpost";
import ListFollow from "./components/ListFollow";
import ProfileCard from "./components/ProfileCard";
import Loader from "./Loader";
import "./styles/feed.scss";

const Feed = () => {
    const { user } = useGlobalContext();

    return (
        <div className="feed">
            <ProfileCard id={user.id} />
            <ListBeerpost url={`/api/beerposts/feed/${user.id}`} />
            <ListFollow />
        </div>
    );
};

export default Feed;
