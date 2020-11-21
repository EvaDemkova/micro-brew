import React, { useEffect, useState } from "react";
import { useDashboardContext } from "../dashboardContext";
import Loader from "../Loader";
import Beerpost from "./Beerpost/Beerpost";
import "./styles/listBeerpost.scss";

const ListBeerpost = ({ url }) => {
    const [beerposts, setBeerposts] = useState([]);
    const {
        isBeerListRender,
        setIsBeerListRender,
        isLoading,
        setIsLoading
    } = useDashboardContext();

    const fetchDatas = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setBeerposts(data);
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true);
        fetchDatas();
        setIsBeerListRender(false);
    }, [url, isBeerListRender]);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className="listBeerpost">
            {beerposts.length === 0 ? (
                <h3>No Beerpost Available</h3>
            ) : (
                <>
                    {beerposts.map(beerpost => (
                        <Beerpost key={beerpost.id} data={beerpost} />
                    ))}
                </>
            )}
        </div>
    );
};

export default ListBeerpost;
