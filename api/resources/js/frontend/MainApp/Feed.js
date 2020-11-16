import React from "react";
import { useGlobalContext } from "../context";
import ListBeerpost from "./components/ListBeerpost";
import ProfileCard from "./components/ProfileCard";

const Feed = () => {
    const user = useGlobalContext();
    return (
        <div className="feed">
            <ProfileCard />
            <ListBeerpost url={`/api/beerposts/feed/${user.user.id}`} />
        </div>
    );
};

export default Feed;
