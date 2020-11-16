import React from "react";
import ListBeerpost from "./components/ListBeerpost";
import ProfileCard from "./components/ProfileCard";

const Feed = () => {
    return (
        <div className="feed">
            <ProfileCard />
            <ListBeerpost url={`/api/beerposts/feed/2`} />
        </div>
    );
};

export default Feed;