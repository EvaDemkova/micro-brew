import React, { useEffect, useState } from "react";
import { useDashboardContext } from "../dashboardContext";
import "./styles/listBeerpost.scss";
import Chart from './Chart';

const Statistics = ({ url }) => {
    const [lagerVolume, setLagerVolume] = useState(0);
    const [aleVolume, setAleVolume] = useState(0);
    const [totalVolume, setTotalVolume] = useState(0);

    const {
        isLoading,
        setIsLoading
    } = useDashboardContext();

    const fetchDatas = async () => {
        const response = await fetch(url);
        const data = await response.json();
        data.forEach((beerpost, i) => {
            if (beerpost.type === 'ale') {
                setAleVolume(prev => prev + beerpost.batch_volume);
            } else if (beerpost.type === 'lager') {
                setLagerVolume(prev => prev + beerpost.batch_volume)
            } else {
                console.log('something is wrong')
            }
            setTotalVolume(prev => prev + beerpost.batch_volume);  
        })
        setIsLoading(false);
    }

    useEffect(() => {       
        fetchDatas();
    }, [url]);

    if (isLoading) {
        return <div></div>;
    }

    return (
        <div className="statistics-container">
            <h1>Beer Statistics</h1>
            <h3>Volume</h3>
            <Chart aleVolume={aleVolume} lagerVolume={lagerVolume} totalVolume={ totalVolume}/>
        </div>
    );
};

export default Statistics;
