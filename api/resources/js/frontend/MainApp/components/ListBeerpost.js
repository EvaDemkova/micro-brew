import React, { useEffect, useState } from "react";
import Beerpost from "./Beerpost/Beerpost";
import "./styles/listBeerpost.scss";

const ListBeerpost = ({ url }) => {
    const [beerposts, setBeerposts] = useState([]);

    const fetchDatas = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setBeerposts(data);
    };
    console.log(beerposts);

    useEffect(() => {
        fetchDatas();
    }, [url]);

    return (
        <div className="listBeerpost">
            {beerposts.map(beerpost => (
                <Beerpost key={beerpost.id} data={beerpost} />
            ))}
        </div>
    );
};

export default ListBeerpost;
