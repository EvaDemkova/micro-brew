import React from "react";
import { useGlobalContext } from "../context";
import ListBeerpost from "./components/ListBeerpost";
import ListFollow from "./components/ListFollow";
import ProfileCard from "./components/ProfileCard";
import "./styles/feed.scss";

const Feed = () => {
    const user = useGlobalContext();
    return (
        <div className="feed">
            <ProfileCard />
            <ListBeerpost url={`/api/beerposts/feed/${user.user.id}`} />
            <ListFollow />
        </div>
    );
};

export default Feed;
