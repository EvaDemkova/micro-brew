import React, { useEffect, useState } from "react";
import { useDashboardContext } from "../dashboardContext";
import "./styles/listBeerpost.scss";
import Chart from "./Chart";
import "./styles/statistics.scss";
import useWindowWidth from "./useWindowWidth";

const Statistics = ({ url }) => {
    const [lagerVolume, setLagerVolume] = useState(0);
    const [aleVolume, setAleVolume] = useState(0);
    const [totalVolume, setTotalVolume] = useState(0);
    const width = useWindowWidth();

    const { isLoading, setIsLoading } = useDashboardContext();

    const fetchDatas = async () => {
        setLagerVolume(0);
        setAleVolume(0);
        setTotalVolume(0);

        const response = await fetch(url);
        const data = await response.json();

        data.forEach((beerpost, i) => {
            if (beerpost.type === "ale") {
                setAleVolume(prev => prev + beerpost.batch_volume);
            } else if (beerpost.type === "lager") {
                setLagerVolume(prev => prev + beerpost.batch_volume);
            } else {
                console.log("something is wrong");
            }
            setTotalVolume(prev => prev + beerpost.batch_volume);
        });
        setIsLoading(false);
    };

    useEffect(() => {
        fetchDatas();
    }, [url]);

    if (isLoading) {
        return <div></div>;
    }

    if (aleVolume === 0 && lagerVolume === 0 && totalVolume === 0) {
        return (
            <div className="statistics-container">
                <h2>Beer Statistics</h2>
                <p>No statistics available yet</p>
            </div>
        );
    }

    if (width >= 1150 && width < 1500) {
        return (
            <div className="statistics-container">
                <h2>Beer Statistics</h2>
                <h4>Volume</h4>
                <Chart
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    width={220}
                    height={250}
                    layout="horizontal"
                    aleVolume={aleVolume}
                    lagerVolume={lagerVolume}
                    totalVolume={totalVolume}
                />
            </div>
        );
    } else if (width >= 1500) {
        return (
            <div className="statistics-container">
                <h2>Beer Statistics</h2>
                <h4>Volume</h4>
                <Chart
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    width={250}
                    height={280}
                    layout="horizontal"
                    aleVolume={aleVolume}
                    lagerVolume={lagerVolume}
                    totalVolume={totalVolume}
                />
            </div>
        );
    } else if (width < 1150 && width >= 980) {
        return (
            <div className="statistics-container">
                <h2>Beer Statistics</h2>
                <h4>Volume</h4>
                <Chart
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={50}
                    width={170}
                    height={250}
                    layout="vertical"
                    aleVolume={aleVolume}
                    lagerVolume={lagerVolume}
                    totalVolume={totalVolume}
                />
            </div>
        );
    } else if (width < 980 && width >= 500) {
        return (
            <div className="statistics-container">
                <h2>Beer Statistics</h2>
                <h4>Volume</h4>
                <Chart
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={30}
                    width={110}
                    height={250}
                    layout="vertical"
                    aleVolume={aleVolume}
                    lagerVolume={lagerVolume}
                    totalVolume={totalVolume}
                />
            </div>
        );
    }
};

export default Statistics;
