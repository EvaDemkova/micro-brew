import React, { useEffect, useState } from "react";
import Beerpost from "./Beerpost/Beerpost";
import "./styles/listBeerpost.scss";

const ListBeerpost = ({ url, setIsBeerpostForm, setIsFormUpdating }) => {
    const [beerposts, setBeerposts] = useState([]);

    const fetchDatas = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setBeerposts(data);
    };

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
