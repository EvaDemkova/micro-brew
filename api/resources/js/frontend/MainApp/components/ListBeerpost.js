import React, { useEffect, useState } from "react";
import { useDashboardContext } from "../dashboardContext";
import Beerpost from "./Beerpost/Beerpost";
import "./styles/listBeerpost.scss";

const ListBeerpost = ({ url }) => {
    const [beerposts, setBeerposts] = useState([]);
    const { isBeerListRender, setIsBeerListRender } = useDashboardContext();

    const fetchDatas = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setBeerposts(data);
    };

    useEffect(() => {
        fetchDatas();
        setIsBeerListRender(false);
    }, [url, isBeerListRender]);

    return (
        <div className="listBeerpost">
            {beerposts.map(beerpost => (
                <Beerpost key={beerpost.id} data={beerpost} />
            ))}
        </div>
    );
};

export default ListBeerpost;
